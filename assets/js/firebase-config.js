// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyB5yIyAh89fbbXaTIV3G8RIuU58XUe1q3E",
    authDomain: "energyconsult-7a837.firebaseapp.com",
    databaseURL: "https://energyconsult-7a837-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "energyconsult-7a837",
    storageBucket: "energyconsult-7a837.appspot.com",
    messagingSenderId: "13160027292",
    appId: "1:13160027292:web:1bf66f415c06214f5d8259",
    measurementId: "G-FT6CQT0NP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize the Realtime Database
const database = getDatabase(app);

// Export database functions for use in other files
export { database, ref, set };
