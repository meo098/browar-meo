let slideWrapper = document.querySelector('.slider-wrapper');
let slide = document.querySelector('.slide');
let slideHeight = slide.clientHeight;
slideWrapper.style.height = `${slideHeight}px`;



window.addEventListener('resize', () => {
    slideHeight = slide.clientHeight;
    slideWrapper.style.height = `${slideHeight}px`;
})
