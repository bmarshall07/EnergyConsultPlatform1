Firebase Configuration

// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "energyconsult-7a837.firebaseapp.com",
    databaseURL: "https://energyconsult-7a837-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "energyconsult-7a837",
    storageBucket: "energyconsult-7a837.appspot.com",
    messagingSenderId: "131060027292",
    appId: "1:131060027292:web:1bf6fe415c06214f5d8259",
    measurementId: "G-FT6CQTN0P2"
};

export const app = initializeApp(firebaseConfig);
