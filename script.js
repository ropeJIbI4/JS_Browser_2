const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const marker = document.querySelectorAll('.marker');

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    marker[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    marker[currentSlide].classList.add('active');
}

function prevSlide() {
    slides[currentSlide].classList.remove('active');
    marker[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    marker[currentSlide].classList.add('active');
}

function selectDot(dot) {
    slides[currentSlide].classList.remove('active');
    marker[currentSlide].classList.remove('active');
    currentSlide = dot;
    slides[currentSlide].classList.add('active');
    marker[currentSlide].classList.add('active');
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

marker.forEach((marker, index) => {
    marker.addEventListener('click', () => {
        selectDot(index);
    });
});