document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    const scrollAmount = 250; // Adjust this value for smaller/larger scroll increments

    // Function to check if a carousel overflows
    const checkOverflow = (carousel) => {
        const isOverflowing = carousel.scrollWidth > carousel.clientWidth;
        const leftButton = carousel.previousElementSibling;
        const rightButton = carousel.nextElementSibling;

        if (isOverflowing) {
            leftButton.classList.remove('hidden');
            rightButton.classList.remove('hidden');
        } else {
            leftButton.classList.add('hidden');
            rightButton.classList.add('hidden');
        }
    };

    // Initial check for overflow on all carousels
    carousels.forEach((carousel) => {
        checkOverflow(carousel);

        // Re-check on window resize (for responsiveness)
        window.addEventListener('resize', () => checkOverflow(carousel));

        // Button click handlers
        const leftButton = carousel.previousElementSibling;
        const rightButton = carousel.nextElementSibling;

        leftButton.addEventListener('click', () => {
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        rightButton.addEventListener('click', () => {
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    });
});