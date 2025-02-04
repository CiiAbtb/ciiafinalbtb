// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' // Smooth scroll to the target section
        });

        // Close the hamburger menu after clicking a link (if applicable)
        if (window.innerWidth < 768) {
            document.querySelector('#navbar ul').classList.remove('active');
        }
    });
});

// Function to handle the sticky navbar
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    var header = document.querySelector("header");
    var sticky = header.offsetHeight; // Get the height of the header

    // Check if the page has been scrolled past the header
    if (window.pageYOffset > sticky) {
        navbar.classList.add("fixed"); // Add the 'fixed' class to the navbar
    } else {
        navbar.classList.remove("fixed"); // Remove the 'fixed' class from the navbar
    }
};

// Function to toggle the hamburger menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('#navbar ul').classList.toggle('active');
});