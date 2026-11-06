// Form Submission Configuration
export const FORM_CONFIG = {
  // Target Gmail address for all form notifications across the website
  recipientEmail: 'advanceamerica112200@gmail.com',

  // Optional: Web3Forms access key (https://web3forms.com)
  // If provided, form submissions can also route directly through Web3Forms
  web3FormsAccessKey: '',

  // Optional: Formspree Form ID (https://formspree.io)
  formspreeId: '',

  // Local storage key for client-side submission history & emergency offline backup
  localStorageBackupKey: 'advance_america_submissions',

  // Subject prefix for received emails
  subjectPrefix: '[Advance America]',
}
