<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
    import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

    // Firebase configuration
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

    // Initialize Firebase app
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    // Function to listen to experts in the database
    export function listenToExperts(callback) {
        const expertsRef = ref(database, 'experts');
        onValue(expertsRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        }, (error) => {
            console.error("Error listening to experts:", error);
            callback(null);
        });
    }

    // Function to filter experts based on a search term
    export function searchExperts(experts, searchTerm) {
        const term = searchTerm.toLowerCase();
        return Object.values(experts).filter(expert =>
            expert.fullName.toLowerCase().includes(term) ||
            expert.specialization.toLowerCase().includes(term)
        );
    }

    // Frontend logic
    const expertsContainer = document.getElementById('experts-list');
    
    function createExpertCard(expert) {
        return `
            <article class="expert-card">
                <h3>${expert.fullName}</h3>
                <p class="expertise">${expert.specialization}</p>
                <p class="email">${expert.email}</p>
                <p class="experience">Experience: ${expert.experience}</p>
                <p class="certifications">Certifications: ${expert.certifications}</p>
                <p class="skills">Key Skills: ${expert.keySkills}</p>
                <p class="projects">Projects: ${expert.projects}</p>
            </article>
        `;
    }

    let currentExperts = null;
    listenToExperts((experts) => {
        currentExperts = experts;
        if (experts) {
            expertsContainer.innerHTML = Object.values(experts)
                .map(createExpertCard)
                .join('');
        } else {
            expertsContainer.innerHTML = '<p>No experts available at the moment.</p>';
        }
    });

    document.getElementById('searchInput').addEventListener('input', function() {
        if (!currentExperts) return;
        const filtered = searchExperts(currentExperts, this.value);
        expertsContainer.innerHTML = filtered.length ? 
            filtered.map(createExpertCard).join('') : 
            '<p>No experts found matching your search.</p>';
    });
</script>
