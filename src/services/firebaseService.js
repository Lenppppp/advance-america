import { FIREBASE_CONFIG, isFirebaseConfigured } from '../config/firebaseConfig.js'

/**
 * Extracts a clean, human-readable node key using the applicant's First Name
 */
function extractNodeKey(formType, data) {
  let name = (data['First Name'] || data.firstName || data.Name || data.name || '').trim()
  if (!name && data.Email) {
    name = data.Email.split('@')[0]
  }
  if (!name) {
    name = formType.toLowerCase().includes('newsletter') ? 'Subscriber' : 'Applicant'
  }
  // Sanitize for Firebase Realtime Database (no ., #, $, [, ], /)
  return name.replace(/[.#$\[\]\/]/g, '_').trim() || 'Applicant'
}

/**
 * Saves form submission directly to Firebase Realtime Database under the applicant's First Name
 *
 * @param {string} formType 'Loan Application' | 'Newsletter Signup'
 * @param {Record<string, any>} data Form fields
 * @param {string} subject Email/form title
 * @returns {Promise<{ success: boolean, id?: string, error?: string }>}
 */
export async function saveToFirebase(formType, data, subject) {
  if (!isFirebaseConfigured()) {
    return { success: false, reason: 'Firebase credentials not configured' }
  }

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

  try {
    const databaseUrl = FIREBASE_CONFIG.databaseURL.replace(/\/+$/, '')
    const baseKey = extractNodeKey(formType, data)

    // Check if a record with this First Name already exists to prevent accidental overwriting
    let nodeKey = baseKey
    try {
      const existing = await fetch(`${databaseUrl}/${path}/${encodeURIComponent(baseKey)}.json`, {
        method: 'GET',
      }).then((r) => r.json()).catch(() => null)

      if (existing) {
        const timeTag = new Date()
          .toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })
          .replace(':', '-')
        nodeKey = `${baseKey} (${timeTag})`
      }
    } catch {}

    const targetEndpoint = `${databaseUrl}/${path}/${encodeURIComponent(nodeKey)}.json`

    const response = await fetch(targetEndpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(record),
    })

    const result = await response.json()
    console.log(`[Firebase] Successfully saved submission under "${nodeKey}":`, result ? 'OK' : 'Error')
    return { success: true, id: nodeKey }
  } catch (err) {
    console.error('[Firebase] Error saving to Realtime Database:', err)
    return { success: false, error: err.message }
  }
}
