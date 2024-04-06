document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('darkModeToggle');
    
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});

