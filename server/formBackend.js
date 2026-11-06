import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import nodemailer from 'nodemailer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SUBMISSIONS_FILE = path.resolve(__dirname, '../submissions.json')

// Automatically load .env variables from root
try {
  const envPath = path.resolve(__dirname, '../.env')
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8')
    for (const rawLine of envContent.split('\n')) {
      const line = rawLine.trim()
      if (line && !line.startsWith('#') && line.includes('=')) {
        const idx = line.indexOf('=')
        const k = line.slice(0, idx).trim()
        const v = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '')
        if (k && v) {
          process.env[k] = v
        }
      }
    }
  }
} catch (e) {
  console.warn('[Form System] Unable to load .env:', e.message)
}

/**
 * Appends form submission record to submissions.json instantly
 */
export function recordSubmissionLocally(record) {
  try {
    let existing = []
    if (fs.existsSync(SUBMISSIONS_FILE)) {
      const content = fs.readFileSync(SUBMISSIONS_FILE, 'utf-8').trim()
      if (content) {
        existing = JSON.parse(content)
      }
    }
    existing.unshift({
      id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
      receivedAt: new Date().toISOString(),
      ...record,
    })
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(existing, null, 2), 'utf-8')
    console.log(`[Form System] Submission successfully logged to ${SUBMISSIONS_FILE}`)
  } catch (err) {
    console.error('[Form System] Error recording submission to disk:', err)
  }
}

/**
 * Returns all logged submissions
 */
export function getSubmissions() {
  try {
    if (fs.existsSync(SUBMISSIONS_FILE)) {
      const content = fs.readFileSync(SUBMISSIONS_FILE, 'utf-8').trim()
      if (content) {
        return JSON.parse(content)
      }
    }
  } catch (err) {
    console.error('[Form System] Error reading submissions from disk:', err)
  }
  return []
}

/**
 * Builds a clean, professional HTML table layout for Gmail inbox
 */
export function buildEmailHtml(formType, data, timestamp) {
  const rows = Object.entries(data)
    .filter(([key]) => !key.startsWith('_'))
    .map(
      ([key, val]) => `
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px 14px; font-weight: 600; color: #0b2a4a; background-color: #f8fafc; width: 35%;">
          ${key}
        </td>
        <td style="padding: 10px 14px; color: #1e293b;">
          ${typeof val === 'object' ? JSON.stringify(val) : String(val ?? '')}
        </td>
      </tr>
    `
    )
    .join('')

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background: #ffffff;">
      <div style="background-color: #0b2a4a; color: #ffffff; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff;">Advance America</h1>
        <p style="margin: 6px 0 0 0; font-size: 14px; color: #cbd5e1;">New ${formType} Submission Received</p>
      </div>

      <div style="padding: 24px;">
        <p style="font-size: 14px; color: #64748b; margin-top: 0; margin-bottom: 16px;">
          Received on: <strong>${new Date(timestamp || Date.now()).toLocaleString()}</strong>
        </p>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
          <tbody>
            ${rows}
          </tbody>
        </table>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
          Sent to advanceamerica112200@gmail.com from Advance America Website System
        </div>
      </div>
    </div>
  `
}

/**
 * Dispatches email in the background to advanceamerica112200@gmail.com via formsubmit.io
 * Formats every single field clearly into the message body so all 17 fields appear in Gmail
 */
async function dispatchEmailAsync({ formType, subject, targetEmail, data, timestamp }) {
  const fullName = `${data['First Name'] || ''} ${data['Last Name'] || ''}`.trim() || data.Name || data.name || 'Advance America Applicant'
  const applicantEmail = data.Email || data.email || targetEmail
  const phone = data['Phone Number'] || data.phone || data.Phone || ''

  const formattedLines = Object.entries(data)
    .filter(([key]) => !key.startsWith('_'))
    .map(([key, val]) => `${key}: ${typeof val === 'object' ? JSON.stringify(val) : String(val ?? '')}`)
    .join('\n')

  const fullSummary = [
    `==============================================`,
    `  ADVANCE AMERICA: ${formType.toUpperCase()}`,
    `==============================================`,
    `Date & Time: ${new Date(timestamp || Date.now()).toLocaleString()}`,
    `Applicant Name: ${fullName}`,
    `Email: ${applicantEmail}`,
    phone ? `Phone: ${phone}` : '',
    ``,
    `----------------------------------------------`,
    `           FORM SUBMISSION DETAILS`,
    `----------------------------------------------`,
    formattedLines,
    `==============================================`,
  ].filter(Boolean).join('\n')

  // Generate snake_case versions so FormSubmit template parser can map them
  const snakeFields = {}
  for (const [k, v] of Object.entries(data)) {
    if (!k.startsWith('_')) {
      const cleanKey = k.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
      snakeFields[cleanKey] = typeof v === 'object' ? JSON.stringify(v) : String(v ?? '')
    }
  }

  const finalSubject = subject || `[Advance America] ${formType} from ${fullName}`

  const formSubmitPayload = {
    _subject: finalSubject,
    name: fullName,
    email: applicantEmail,
    phone: phone,
    message: fullSummary,
    comments: fullSummary,
    details: fullSummary,
    ...snakeFields,
    ...data,
  }

  // 1. Check Gmail SMTP if credentials configured
  const gmailUser = process.env.GMAIL_USER || targetEmail
  const gmailPass = process.env.GMAIL_APP_PASSWORD

  if (gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: gmailUser, pass: gmailPass },
      })
      const htmlContent = buildEmailHtml(formType, data, timestamp)
      const info = await transporter.sendMail({
        from: `"Advance America Alerts" <${gmailUser}>`,
        to: targetEmail,
        replyTo: applicantEmail,
        subject: finalSubject,
        html: htmlContent,
      })
      console.log(`[Form System] Sent via Gmail SMTP (ID: ${info.messageId})`)
      return
    } catch (err) {
      console.warn('[Form System] Gmail SMTP error:', err.message)
    }
  }

  // 2. Direct delivery via formsubmit.io using application/x-www-form-urlencoded
  // URL-encoded is the native format for formsubmit.io and ensures all custom fields & messages are parsed
  try {
    const urlParams = new URLSearchParams()
    for (const [k, v] of Object.entries(formSubmitPayload)) {
      urlParams.append(k, String(v))
    }

    const resUrl = await fetch(`https://formsubmit.io/send/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      signal: AbortSignal.timeout(8000),
      body: urlParams.toString(),
    })
    const jsonUrl = await resUrl.json().catch(() => ({}))
    console.log(`[Form System] formsubmit.io urlencoded relay result:`, jsonUrl.success || jsonUrl.status || jsonUrl.id)
  } catch (err) {
    console.warn('[Form System] formsubmit.io urlencoded error:', err.message)
  }

  // 3. Fallback delivery via formsubmit.io using application/json
  try {
    const resJson = await fetch(`https://formsubmit.io/send/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      signal: AbortSignal.timeout(8000),
      body: JSON.stringify(formSubmitPayload),
    })
    const jsonRes = await resJson.json().catch(() => ({}))
    console.log(`[Form System] formsubmit.io json relay result:`, jsonRes.success || jsonRes.status || jsonRes.id)
  } catch (err) {
    console.warn('[Form System] formsubmit.io json error:', err.message)
  }
}

const FIREBASE_DB_URL = process.env.FIREBASE_DATABASE_URL || 'https://forminfo-4af60-default-rtdb.firebaseio.com'

function extractNodeKey(formType, data) {
  let name = (data['First Name'] || data.firstName || data.Name || data.name || '').trim()
  if (!name && data.Email) {
    name = data.Email.split('@')[0]
  }
  if (!name) {
    name = formType.toLowerCase().includes('newsletter') ? 'Subscriber' : 'Applicant'
  }
  return name.replace(/[.#$\[\]\/]/g, '_').trim() || 'Applicant'
}

/**
 * Pushes submission directly to Firebase Realtime Database using the applicant's First Name
 */
async function pushToFirebaseBackend(formType, data, subject) {
  try {
    const path = formType.toLowerCase().includes('newsletter')
      ? 'newsletter_signups'
      : 'loan_applications'
    const record = {
      ...data,
      _formType: formType,
      _subject: subject || `[Advance America] ${formType}`,
      _submittedAt: new Date().toISOString(),
      _localTime: new Date().toLocaleString(),
    }
    const baseKey = extractNodeKey(formType, data)
    let nodeKey = baseKey
    try {
      const existing = await fetch(`${FIREBASE_DB_URL}/${path}/${encodeURIComponent(baseKey)}.json`, {
        method: 'GET',
      }).then((r) => r.json()).catch(() => null)

      if (existing) {
        const timeTag = new Date()
          .toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })
          .replace(':', '-')
        nodeKey = `${baseKey} (${timeTag})`
      }
    } catch {}

    const res = await fetch(`${FIREBASE_DB_URL}/${path}/${encodeURIComponent(nodeKey)}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record),
    })
    const resData = await res.json()
    console.log(`[Form System] Firebase Realtime Database recorded under "${nodeKey}":`, resData ? 'OK' : 'Error')
  } catch (err) {
    console.warn('[Form System] Firebase backend push error:', err.message)
  }
}

/**
 * Handles incoming submission: logs to disk instantly and responds with 0 latency
 */
export async function handleFormSubmission(payload) {
  const { formType = 'Form Submission', subject, recipientEmail, data = {}, timestamp } = payload
  const targetEmail = recipientEmail || 'advanceamerica112200@gmail.com'

  // 1. Immediately log to submissions.json (synchronous, 0ms latency)
  recordSubmissionLocally({
    formType,
    subject,
    targetEmail,
    data,
    timestamp: timestamp || new Date().toISOString(),
  })

  // 2. Push to Firebase Realtime Database
  pushToFirebaseBackend(formType, data, subject).catch(() => {})

  // 3. Dispatch email asynchronously in background
  dispatchEmailAsync({ formType, subject, targetEmail, data, timestamp }).catch(() => {})

  // 4. Return success immediately so the browser transitions without waiting
  return { success: true, method: 'instant_recorded' }
}
