// Toggle navbar for mobile
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navbarLinks = document.querySelector('.navbar-links');

    menuToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});


