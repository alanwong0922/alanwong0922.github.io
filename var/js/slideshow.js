// Store state for multiple sliders (key = slider ID, value = state object)
const sliderStates = {};

// Initialize all sliders on page load
document.addEventListener('DOMContentLoaded', () => {
    // Get all slider containers
    const sliderContainers = document.querySelectorAll('.slideshow-container');
    
    // Initialize each slider
    sliderContainers.forEach(slider => {
        const sliderId = slider.id;
        // Set initial state for the slider
        sliderStates[sliderId] = {
            slideIndex: 1,
            interval: null,
            isPlaying: true
        };
        // Start the slider
        showSlides(1, sliderId);
        startSlideShow(sliderId);

        // Pause on mouse enter, resume on mouse leave
        slider.addEventListener('mouseenter', () => {
            if (sliderStates[sliderId].isPlaying) {
                clearInterval(sliderStates[sliderId].interval);
            }
        });
        slider.addEventListener('mouseleave', () => {
            if (sliderStates[sliderId].isPlaying) {
                startSlideShow(sliderId);
            }
        });
    });
});

// Auto-play function (per slider)
function startSlideShow(sliderId) {
    // Clear existing interval to avoid duplicates
    if (sliderStates[sliderId].interval) {
        clearInterval(sliderStates[sliderId].interval);
    }
    // Set new interval (3 seconds per slide)
    sliderStates[sliderId].interval = setInterval(() => {
        changeSlide(1, sliderId);
    }, 3000);
}

// Change slide (prev/next)
function changeSlide(n, sliderId) {
    const currentIndex = sliderStates[sliderId].slideIndex;
    showSlides(currentIndex + n, sliderId);
}

// Jump to specific slide (dots)
function currentSlide(n, sliderId) {
    showSlides(n, sliderId);
}

// Show specific slide (core logic)
function showSlides(n, sliderId) {
    // Get elements for the target slider
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('.slide');
    const dots = document.querySelector(`.dot-container[data-slider="${sliderId}"]`).querySelectorAll('.dot');
    
    // Loop logic (wrap around)
    let newIndex = n;
    if (newIndex > slides.length) newIndex = 1;
    if (newIndex < 1) newIndex = slides.length;

    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');
    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));

    // Show current slide + activate dot
    slides[newIndex - 1].style.display = 'block';
    dots[newIndex - 1].classList.add('active');

    // Update slider state
    sliderStates[sliderId].slideIndex = newIndex;
}

// Toggle play/pause
function togglePlayPause(sliderId) {
    const state = sliderStates[sliderId];
    const btn = document.querySelector(`.slider-wrapper:has(#${sliderId}) .play-pause-btn`);
    
    if (state.isPlaying) {
        // Pause
        clearInterval(state.interval);
        btn.textContent = 'Play';
    } else {
        // Play
        startSlideShow(sliderId);
        btn.textContent = 'Pause';
    }
    // Update state
    state.isPlaying = !state.isPlaying;
}

