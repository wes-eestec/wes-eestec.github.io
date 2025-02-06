// HAMBURGER MENU
// Get references to the elements
const hamburgerMenu = document.getElementById("HAMBURGER-MENU");
const mobileNav = document.getElementById("MOBILE-NAV");
const openIcon = document.getElementById("open-icon");

// Toggle the navigation and icons
hamburgerMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  openIcon.classList.toggle("fill-wesyellow-600");
});





// COUNTDOWN https://www.w3schools.com/howto/howto_js_countdown.asp
// Set the date we're counting down to
var countDownDate = new Date("Mar 25, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();
    
// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Pad each value with leading zeros
days = String(days).padStart(2, "0");
hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
        
// Display the result in the element with id="demo"
document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
document.getElementById("countdownM").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

// If the count down is finished, write some text
if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "00:00:00:00";
        document.getElementById("countdownM").innerHTML = "00:00:00:00";
    }
}, 1000);



// CAROUSEL
document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.CAROUSEL');
  carousels.forEach(carousel => {
      const prevButton = carousel.querySelector('.prev');
      const nextButton = carousel.querySelector('.next');
      const carouselInner = carousel.querySelector('.carousel-inner');

      // Function to check for horizontal overflow
      function checkOverflow() {
          const isOverflowing = carouselInner.scrollWidth > carouselInner.clientWidth;
          prevButton.classList.toggle('hidden', !isOverflowing);
          nextButton.classList.toggle('hidden', !isOverflowing);
      }

      // Initial check for overflow
      checkOverflow();

      // Event listeners for buttons
      prevButton.addEventListener('click', () => {
          carouselInner.scrollBy({
              left: -150,
              behavior: 'smooth'
          });
      });

      nextButton.addEventListener('click', () => {
          carouselInner.scrollBy({
              left: 150,
              behavior: 'smooth'
          });
      });

      // Check for overflow on window resize
      window.addEventListener('resize', checkOverflow);
  });
});

