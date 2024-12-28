// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5yIyAhB9fbbaXTW03GRBIuU58XUe1q3E",
  authDomain: "energyconsult-7a837.firebaseapp.com",
  databaseURL: "https://energyconsult-7a837-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "energyconsult-7a837",
  storageBucket: "energyconsult-7a837.firebasestorage.app",
  messagingSenderId: "131060027292",
  appId: "1:131060027292:web:1bf6fe415c06214f5d8259",
  measurementId: "G-FT6CQTN0P2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
const database = getDatabase(app);

// Export the necessary functions to use in your main JavaScript file
export { database, ref, set };
