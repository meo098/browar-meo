const navbar = document.querySelector('.navbar');

window.onscroll = () => {
        if(window.innerWidth > 960) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                if(!navbar.classList.contains('scrolled')) {
                    navbar.classList.add('scrolled');
                    console.log("yo");
                }
            }        
            else if (navbar.classList.contains('scrolled')) {
                navbar.classList.remove('scrolled');
                console.log("elo");
            }
        } 
};