// Back to Top Button Logic
const backToTopBtn = document.getElementById('backToTopBtn');

// Show/hide button when scrolling
window.addEventListener('scroll', () => {
    // Show button when scrolled down 300px from top
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Smooth scroll to top when button is clicked
backToTopBtn.addEventListener('click', () => {
    // For all modern browsers
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll animation
    });
});