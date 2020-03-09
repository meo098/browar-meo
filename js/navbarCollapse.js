const options = [...document.querySelectorAll('.navbar-list li')];


options.forEach(option => {
    option.addEventListener('click', () => {
        hamburgerWrapper.classList.toggle('active');
        navbarlist.classList.toggle('active');
    });
});



