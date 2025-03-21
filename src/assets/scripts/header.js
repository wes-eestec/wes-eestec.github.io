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
var countDownDate = new Date("Apr 05, 2025 09:00:00").getTime();

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
    
    // Display the result in the element with id="countdown" (Desktop)
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    // Display the result in the mobile elements
    document.getElementById("MOBILE-DAYS").innerHTML = days;
    document.getElementById("MOBILE-HOURS").innerHTML = hours;
    document.getElementById("MOBILE-MINUTES").innerHTML = minutes;
    document.getElementById("MOBILE-SECONDS").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "00:00:00:00";
        document.getElementById("MOBILE-DAYS").innerHTML = "00";
        document.getElementById("MOBILE-HOURS").innerHTML = "00";
        document.getElementById("MOBILE-MINUTES").innerHTML = "00";
        document.getElementById("MOBILE-SECONDS").innerHTML = "00";
    }
}, 1000);






// SHRINK HEADER ON SCROLL
window.addEventListener('scroll', () => {
  const header = document.querySelector('#HEADER-DESKTOP');
  const logo = document.querySelector('#HEADER-DESKTOP img');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) { // Adjust this value based on when you want the header to shrink
      header.classList.remove('py-4', 'lg:py-8'); // Remove larger padding
      header.classList.add('py-4'); // Add smaller padding
      logo.classList.remove('max-h-8', 'md:max-h-16', 'lg:max-h-24'); // Remove larger logo height
      logo.classList.add('max-h-6', 'md:max-h-13', 'lg:max-h-20'); // Add smaller logo height
  } else {
      header.classList.remove('py-2'); // Remove smaller padding
      header.classList.add('py-4', 'lg:py-8'); // Add larger padding
      logo.classList.remove('max-h-6', 'md:max-h-13', 'lg:max-h-20'); // Remove smaller logo height
      logo.classList.add('max-h-8', 'md:max-h-16', 'lg:max-h-24'); // Add larger logo height
  }
});


