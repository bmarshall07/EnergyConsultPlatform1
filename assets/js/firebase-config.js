// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALxTMkfLf_n-BttEsmJWuSZBAloRM0RQU",
  authDomain: "energyconsult-a0555.firebaseapp.com",
  projectId: "energyconsult-a0555",
  storageBucket: "energyconsult-a0555.firebasestorage.app",
  messagingSenderId: "378868227507",
  appId: "1:378868227507:web:1688a3f4e29d67f25affc6",
  measurementId: "G-4ZS18E2DRY"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
