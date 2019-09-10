const carouselSlide = document.querySelector('.carousel-slide');
const carouselSlides = document.querySelectorAll('.carousel-slide div');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselSlides[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px)';

nextBtn.addEventListener('click', ()=> {
    if(counter >= carouselSlides.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px)';
    carouselSlide.style.justifySelf = "center"
})

prevBtn.addEventListener('click', ()=> {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', () => {
    console.log('carouselSlides[counter].id', carouselSlides[counter].id)
    if (carouselSlides[counter].id === 'lastClone') {
        console.log('id')
        console.log('id')
        carouselSlide.style.transition = 'none';
        counter = carouselSlides.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselSlides[counter].id === 'firstClone') {
        console.log('id')
        carouselSlide.style.transition = 'none';
        counter = carouselSlides.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})