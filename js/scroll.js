const navbar = document.querySelector('.navbar');



window.onscroll = () => {
        if(window.innerWidth > 960) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                navbar.classList.add('scrolled');
            }
            else {
                navbar.classList.remove('scrolled');
            }
        } 
};