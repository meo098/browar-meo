const nextBtn = document.querySelector('.btn-slide-next');
const prevBtn = document.querySelector('.btn-slide-prev');
const allSlides = [...document.querySelectorAll('.slide')];
let active = null;
let newActive = null;
let clickable = true;

function changeSlide(direction) {
    if (clickable) {
        active = document.querySelector('.active');
        let activeSlideIndex = allSlides.indexOf(active);
        clickable = false;
        if (direction) {
            newActive = allSlides[(activeSlideIndex - 1 + allSlides.length) % allSlides.length];
            active.classList.add('toLeftOut');
            newActive.classList.add('active');
            newActive.classList.add('toLeftIn');  
        }
        else { 
            newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
            active.classList.add('toRightOut');
            newActive.classList.add('active');
            newActive.classList.add('toRightIn'); 
        }
    }  
};

nextBtn.addEventListener('click', () => {
    changeSlide(true);
});
prevBtn.addEventListener('click', () => {
    changeSlide(false);
});

setInterval(() => {
    changeSlide(true);
},5000);
 



allSlides.forEach(slide => {
    slide.addEventListener('transitionend', () => {
        if (slide === active) {
            slide.className = 'slide';
            clickable = true;
        }          
    })
});