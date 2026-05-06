/* AOS Animation Init */
AOS.init({
duration: 1000,
once: true
});

/* Hamburger Menu Toggle */
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger && menu) {
hamburger.addEventListener("click", function () {
menu.classList.toggle("active");
});
}
