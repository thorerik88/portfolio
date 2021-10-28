// mobile dropdown menu

const mobileBtn = document.querySelector(".nav-hero__hamburger");
const mobileMenu = document.querySelector(".dropdown");
let icon = document.querySelector(".fa-bars");

// open or close menu and change icon accordingly
mobileBtn.addEventListener("click", function() {
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
        icon.classList = "fas fa-bars";
    } else {
        mobileMenu.style.display = "block";
        icon.classList = "fas fa-times";
    }
})

// close menu when link is clicked
mobileMenu.addEventListener("click", function() {
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
        icon.classList = "fas fa-bars";
    }
})