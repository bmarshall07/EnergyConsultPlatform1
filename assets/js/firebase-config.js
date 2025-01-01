<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
    import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

    const firebaseConfig = {
        apiKey: "AIzaSyB5yIyAhB9fbbaXTW03GRBIuU58XUe1q3E",
        authDomain: "energyconsult-7a837.firebaseapp.com",
        databaseURL: "https://energyconsult-7a837-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "energyconsult-7a837",
        storageBucket: "energyconsult-7a837.appspot.com",
        messagingSenderId: "131060027292",
        appId: "1:131060027292:web:1bf6fe415c06214f5d8259"
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    const loadingMessage = document.getElementById('loadingMessage');
    const errorMessage = document.getElementById('errorMessage');
    const expertsContainer = document.getElementById('expertCards');

    // Function to create expert cards dynamically
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

    // Reference the "experts" node in Firebase Realtime Database
    const expertsRef = ref(database, 'experts');

    // Fetch and display experts
    onValue(expertsRef, (snapshot) => {
        console.log("Fetching data from Firebase...");
        loadingMessage.classList.add('hidden');
        const experts = snapshot.val();

        if (experts) {
            errorMessage.classList.add('hidden');
            const expertsArray = Object.values(experts).sort((a, b) =>
                (a.fullName || '').localeCompare(b.fullName || '')
            );

            // Clear the container only once before rendering new cards
            expertsContainer.innerHTML = '';
            if (expertsArray.length > 0) {
                expertsArray.forEach(expert => {
                    expertsContainer.innerHTML += createExpertCard(expert);
                });
            } else {
                showError('No experts available at the moment.');
            }
        } else {
            // No data in the database
            expertsContainer.innerHTML = '';
            showError('No experts available at the moment.');
        }
    }, (error) => {
        console.error("Firebase Error:", error.message);
        showError('Error fetching experts. Please try again later.');
    });

    // Search Functionality
    document.getElementById('searchInput').addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('.expert-card');
        let hasVisibleCards = false;

        cards.forEach(card => {
            const isVisible = card.textContent.toLowerCase().includes(searchTerm);
            card.classList.toggle('hidden', !isVisible);
            if (isVisible) hasVisibleCards = true;
        });

        if (!hasVisibleCards && searchTerm) {
            showError('No experts found matching your search.');
        } else {
            errorMessage.classList.add('hidden');
        }
    });

    // Error Display Function
    function showError(message) {
        console.error("Error:", message); // Log error messages
        errorMessage.textContent = message;
        errorMessage.classList.remove('hidden');
    }
</script>



