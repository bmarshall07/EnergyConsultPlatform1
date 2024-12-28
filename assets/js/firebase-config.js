// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

// Your Firebase project configuration object
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Replace with your Firebase API key
  authDomain: "YOUR_AUTH_DOMAIN", // Replace with your Firebase auth domain
  databaseURL: "YOUR_DATABASE_URL", // Replace with your Firebase Realtime Database URL
  projectId: "YOUR_PROJECT_ID", // Replace with your Firebase project ID
  storageBucket: "YOUR_STORAGE_BUCKET", // Replace with your Firebase storage bucket URL
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Replace with your messaging sender ID
  appId: "YOUR_APP_ID" // Replace with your Firebase app ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
const database = getDatabase(app);

// Export the necessary functions to use in your main JavaScript file
export { database, ref, set };
