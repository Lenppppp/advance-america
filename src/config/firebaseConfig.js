// Firebase Web Configuration
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBhw-kSA2PdlY7AmKnNUIuf9l4hIiOR9GU",
  authDomain: "forminfo-4af60.firebaseapp.com",
  databaseURL: "https://forminfo-4af60-default-rtdb.firebaseio.com",
  projectId: "forminfo-4af60",
  storageBucket: "forminfo-4af60.firebasestorage.app",
  messagingSenderId: "422452098924",
  appId: "1:422452098924:web:eb492da0fddc962f406549",
}

/**
 * Checks if Firebase has been configured with real credentials
 */
export function isFirebaseConfigured() {
  return Boolean(
    FIREBASE_CONFIG.apiKey &&
    FIREBASE_CONFIG.databaseURL &&
    FIREBASE_CONFIG.apiKey.startsWith('AIza')
  )
}