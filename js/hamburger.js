$(document).ready(() => {
    const hamburgerWrapper = $('.hamburger-wrapper');
    const navbarlist = $('.navbar-list');
    hamburgerWrapper.click(()=>{
        hamburgerWrapper.toggleClass('active');
        navbarlist.toggleClass('active');
    });
});