const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentPosition = 0;

function show(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.toggle('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentPosition = (currentPosition - 1 + slides.length) % slides.length;
    show(currentPosition);
});

nextButton.addEventListener('click', () => {
    currentPosition = (currentPosition + 1) % slides.length;
    show(currentPosition);
});

show(currentPosition);