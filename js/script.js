const menuToggle = document.querySelector('#menu-togle');
const mobileNavCintainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function() {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavCintainer.classList.toggle('mobile-nav-active');
}