import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import firebaseConfig from './firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission
document.getElementById("expert-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const expertise = document.getElementById("expertise").value;

    try {
        await addDoc(collection(db, "experts"), {
            name,
            email,
            expertise,
        });
        alert("Profile submitted successfully!");
        e.target.reset();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Something went wrong. Please try again.");
    }
});
