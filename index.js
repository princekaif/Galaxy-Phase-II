// Function to handle the Enter button click
document.getElementById("enter-button").onclick = function() {
    document.getElementById("welcome-page").style.display = "none"; // Hide welcome page
    document.getElementById("navbar").style.display = "flex"; // Show navbar
    document.querySelector("body").style.overflow = "auto"; // Enable scrolling again
  };
  
  // Sticky Navbar Functionality
  window.onscroll = function() {stickyNavbar()};
  
  // Get the navbar
  const navbar = document.getElementById("navbar");
  
  // Get the offset position of the navbar
  const sticky = navbar.offsetTop;
  
  function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  
  // Toggle mobile menu
  function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  }
// Set the event date (October 24, 2024)
const eventDate = new Date("October 24, 2024 00:00:00").getTime();

// Update the countdown every second
const timerInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  // Calculate time left
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the HTML with new values
  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

  // Stop the countdown when event date is reached
  if (distance < 0) {
    clearInterval(timerInterval);
    document.querySelector("#countdown").innerHTML = "<h2>The event has started!</h2>";
  }
}, 1000);





document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
