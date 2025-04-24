
// Navigation handler
const navLinks = document.querySelectorAll('.nav-bar');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);

        // Hide all pages
        pages.forEach(page => page.classList.remove('active'));

        // Show target page
        document.getElementById(targetId).classList.add('active');

        // Update active link style
        navLinks.forEach(l => l.style.backgroundColor = '');
        link.style.backgroundColor = '#F9B4AB';
    });
});

// Set initial active link style
document.querySelector('.nav-bar[href="#home"]').style.backgroundColor = '#F9B4AB';
