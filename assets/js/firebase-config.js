<script type="module">
    import { listenToExperts, searchExperts } from './firebase-config.js';

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
