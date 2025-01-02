<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

console.log("Script started");

const firebaseConfig = {
    apiKey: "AIzaSyB5yIyAhB9fbbaXTW03GRBIuU58XUe1q3E",
    authDomain: "energyconsult-7a837.firebaseapp.com",
    databaseURL: "https://energyconsult-7a837-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "energyconsult-7a837",
    storageBucket: "energyconsult-7a837.appspot.com",
    messagingSenderId: "131060027292",
    appId: "1:131060027292:web:1bf6fe415c06214f5d8259"
};

console.log("Initializing Firebase");
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log("Firebase initialized");

const loadingMessage = document.getElementById('loadingMessage');
const errorMessage = document.getElementById('errorMessage');
const expertsContainer = document.getElementById('expertCards');
const searchInput = document.getElementById('searchInput');

console.log("DOM elements retrieved:", { loadingMessage, errorMessage, expertsContainer, searchInput });

loadingMessage.style.display = 'block';
errorMessage.style.display = 'none';
expertsContainer.style.display = 'none';

function createExpertCard(expert) {
    return `
        <article class="expert-card">
            <h3>${expert.fullName || 'N/A'}</h3>
            <p><strong>Specialization:</strong> ${expert.specialization || 'N/A'}</p>
            <p><strong>Email:</strong> ${expert.email || 'Not provided'}</p>
            <p><strong>Experience:</strong> ${expert.experience || 'N/A'}</p>
            <p><strong>Certifications:</strong> ${expert.certifications || 'N/A'}</p>
            <p><strong>Skills:</strong> ${expert.keySkills || 'N/A'}</p>
            <p><strong>Projects:</strong> ${expert.projects || 'N/A'}</p>
        </article>
    `;
}

console.log("Creating reference to 'experts' in database");
const expertsRef = ref(database, 'experts');

console.log("Attaching onValue listener");
onValue(expertsRef, (snapshot) => {
    console.log("Data received from Firebase");
    const experts = snapshot.val();
    console.log("Experts data:", experts);

    loadingMessage.style.display = 'none';

    if (experts && Object.keys(experts).length > 0) {
        console.log("Processing experts data");
        const expertsArray = Object.values(experts).sort((a, b) => 
            (a.fullName || '').localeCompare(b.fullName || '')
        );
        console.log("Sorted experts array:", expertsArray);

        expertsContainer.innerHTML = expertsArray.map(createExpertCard).join('');
        console.log("Expert cards HTML created");

        requestAnimationFrame(() => {
            expertsContainer.style.display = 'grid';
            console.log("Expert container display set to grid");
        });

        errorMessage.style.display = 'none';
    } else {
        console.log("No experts found or empty data");
        expertsContainer.style.display = 'none';
        errorMessage.textContent = 'No experts available at the moment.';
        errorMessage.style.display = 'block';
    }
}, (error) => {
    console.error("Firebase Error:", error);
    loadingMessage.style.display = 'none';
    expertsContainer.style.display = 'none';
    errorMessage.textContent = 'Error fetching experts. Please try again later.';
    errorMessage.style.display = 'block';
});

// Search functionality
searchInput.addEventListener('input', function() {
    console.log("Search input detected");
    const searchTerm = this.value.toLowerCase();
    const cards = document.querySelectorAll('.expert-card');
    let hasVisibleCards = false;

    cards.forEach(card => {
        const isVisible = card.textContent.toLowerCase().includes(searchTerm);
        card.style.display = isVisible ? 'flex' : 'none';
        if (isVisible) hasVisibleCards = true;
    });

    errorMessage.style.display = (!hasVisibleCards && searchTerm) ? 'block' : 'none';
    if (!hasVisibleCards && searchTerm) {
        errorMessage.textContent = 'No experts found matching your search.';
    }
    console.log("Search completed, visible cards:", hasVisibleCards);
});

console.log("Script setup completed");
</script>

