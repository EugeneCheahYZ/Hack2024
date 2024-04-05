document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('darkModeToggle');
    
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});

document.getElementById('darkModeToggle').addEventListener('click', function() {
    var moonIcon = document.querySelector('.moon-icon');
    var sunIcon = document.querySelector('.sun-icon');
    
    // Toggle the display property of the icons
    if (moonIcon.classList.contains('fa-moon')) {
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');
        moonIcon.classList.remove('moon-icon');
        moonIcon.classList.add('sun-icon');
        
        sunIcon.classList.remove('fa-sun');
        sunIcon.classList.add('fa-moon');
        sunIcon.classList.remove('sun-icon');
        sunIcon.classList.add('moon-icon');
    } else {
        moonIcon.classList.remove('fa-sun');
        moonIcon.classList.add('fa-moon');
        moonIcon.classList.remove('sun-icon');
        moonIcon.classList.add('moon-icon');
        
        sunIcon.classList.remove('fa-moon');
        sunIcon.classList.add('fa-sun');
        sunIcon.classList.remove('moon-icon');
        sunIcon.classList.add('sun-icon');
    }
});
