//const navbar = document.querySelector('.navbar');

window.onresize = () => {
      if(window.innerWidth < 960) {
        // navbar.classList.add('mobile');
        navbar.classList.remove('scrolled');
    }
    else {
        // navbar.classList.remove('mobile');
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.classList.add('scrolled');  
        }
        
    }
    
}