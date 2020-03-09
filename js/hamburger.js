

const hamburgerWrapper = document.querySelector('.hamburger-wrapper');
const navbarlist = document.querySelector('.navbar-list');

hamburgerWrapper.addEventListener('click', () => {
    hamburgerWrapper.classList.toggle('active');
    navbarlist.classList.toggle('active');
});






