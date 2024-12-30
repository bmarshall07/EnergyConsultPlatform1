// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

// Firebase configuration - use exactly as shown
const firebaseConfig = {
    apiKey: "AIzaSyB5yIyAhB9fbbaXTW03GRBIuU58XUe1q3E",
    authDomain: "energyconsult-7a837.firebaseapp.com",
    databaseURL: "https://energyconsult-7a837-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "energyconsult-7a837",
    storageBucket: "energyconsult-7a837.appspot.com",
    messagingSenderId: "131060027292",
    appId: "1:131060027292:web:1bf6fe415c06214f5d8259",
    measurementId: "G-FT6CQTN0P2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const expertsRef = ref(database, 'experts');

// Create HTML for each expert card
function createExpertCard(expert) {
    return `
        <div class="expert-card">
            <div class="inner">
                <h3>${expert.fullName}</h3>
                <div class="content">
                    <p><strong>Email:</strong> ${expert.email}</p>
                    <p><strong>Specialization:</strong> ${expert.specialization}</p>
                    <p><strong>Experience:</strong> ${expert.experience}</p>
                    <p><strong>Certifications:</strong> ${expert.certifications}</p>
                    <p><strong>Key Skills:</strong> ${expert.keySkills}</p>
                    <p><strong>Projects:</strong> ${expert.projects}</p>
                </div>
            </div>
        </div>
    `;
}

// When page loads
document.addEventListener('DOMContentLoaded', function() {
    const expertsContainer = document.getElementById('experts-list');
    const searchInput = document.getElementById('searchInput');

    // Show loading message
    expertsContainer.innerHTML = '<p>Loading experts...</p>';

    // Load experts from Firebase
    onValue(expertsRef, (snapshot) => {
        const experts = snapshot.val();
        if (experts) {
            expertsContainer.innerHTML = Object.values(experts)
                .map(expert => createExpertCard(expert))
                .join('');
        } else {
            expertsContainer.innerHTML = '<p>No experts available at the moment.</p>';
        }
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const expertCards = document.querySelectorAll('.expert-card');

        expertCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });
});
