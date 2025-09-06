// Smooth scroll function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
}

// Handle form submission (basic alert for now)
document.querySelector("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
});