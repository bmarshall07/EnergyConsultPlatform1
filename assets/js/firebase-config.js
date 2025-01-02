<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
    import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

    const firebaseConfig = {
        // Your Firebase configuration
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    const loadingMessage = document.getElementById('loadingMessage');
    const errorMessage = document.getElementById('errorMessage');
    const expertsContainer = document.getElementById('expertCards');

    // Set initial states
    loadingMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    expertsContainer.style.display = 'none';

    function createExpertCard(expert) {
        // Your existing createExpertCard function
    }

    const expertsRef = ref(database, 'experts');

    onValue(expertsRef, (snapshot) => {
        const experts = snapshot.val();
        loadingMessage.style.display = 'none';

        if (experts && Object.keys(experts).length > 0) {
            const expertsArray = Object.values(experts).sort((a, b) => 
                (a.fullName || '').localeCompare(b.fullName || '')
            );
            expertsContainer.innerHTML = expertsArray.map(createExpertCard).join('');
            
            // Use setTimeout to ensure styles are applied after the content is rendered
            setTimeout(() => {
                expertsContainer.style.display = 'grid';
            }, 0);
            
            errorMessage.style.display = 'none';
        } else {
            expertsContainer.style.display = 'none';
            errorMessage.textContent = 'No experts available at the moment.';
            errorMessage.style.display = 'block';
        }
    }, (error) => {
        loadingMessage.style.display = 'none';
        expertsContainer.style.display = 'none';
        errorMessage.textContent = 'Error fetching experts. Please try again later.';
        errorMessage.style.display = 'block';
        console.error("Firebase Error:", error);
    });

    // Your existing search functionality
</script>

