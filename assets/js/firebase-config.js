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

    console.log("Script started");

    function createExpertCard(expert) {
        // Your existing createExpertCard function
    }

    const expertsRef = ref(database, 'experts');

    console.log("About to attach onValue listener");

    onValue(expertsRef, (snapshot) => {
        console.log("onValue callback triggered");
        const experts = snapshot.val();
        console.log("Experts data:", experts);

        loadingMessage.style.display = 'none';

        if (experts && Object.keys(experts).length > 0) {
            console.log("Experts found, processing data");
            const expertsArray = Object.values(experts).sort((a, b) => 
                (a.fullName || '').localeCompare(b.fullName || '')
            );
            expertsContainer.innerHTML = expertsArray.map(createExpertCard).join('');
            console.log("Expert cards HTML created");
            
            requestAnimationFrame(() => {
                expertsContainer.style.display = 'grid';
                console.log("Expert container display set to grid");
            });
            
            errorMessage.style.display = 'none';
        } else {
            console.log("No experts found");
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

    // Existing search functionality
</script>

