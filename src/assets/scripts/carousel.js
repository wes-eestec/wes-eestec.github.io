document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    const scrollAmount = 250;

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

    carousels.forEach((carousel) => {
        // Add initial Tailwind classes
        carousel.classList.add('cursor-grab', 'select-none');

        // Drag functionality variables
        let isDragging = false;
        let startX;
        let scrollLeft;

        // Mouse down event
        carousel.addEventListener('mousedown', (e) => {
            isDragging = true;
            carousel.classList.remove('cursor-grab');
            carousel.classList.add('cursor-grabbing');
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        // Mouse move event
        carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX);
            carousel.scrollLeft = scrollLeft - walk;
        });

        // Mouse up event
        carousel.addEventListener('mouseup', () => {
            isDragging = false;
            carousel.classList.remove('cursor-grabbing');
            carousel.classList.add('cursor-grab');
        });

        // Mouse leave event
        carousel.addEventListener('mouseleave', () => {
            isDragging = false;
            carousel.classList.remove('cursor-grabbing');
            carousel.classList.add('cursor-grab');
        });

        // Initial overflow check
        checkOverflow(carousel);

        // Resize event listener
        window.addEventListener('resize', () => checkOverflow(carousel));

        // Button navigation
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