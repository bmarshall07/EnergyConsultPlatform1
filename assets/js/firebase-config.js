// Remove the import lines and just use these
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
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Export for other files
export { database };
