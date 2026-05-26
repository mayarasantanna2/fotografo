window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-section");

    if (window.scrollY > 100) {
        header.classList.add("header-normal");
    } else {
        header.classList.remove("header-normal");
    }
});
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-section");

    if (window.scrollY > 100) {
        header.classList.add("header-normal");
    } else {
        header.classList.remove("header-normal");
    }
});

const menuBtn = document.querySelector(".mobile-menu-icon");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});