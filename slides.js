let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('prevBtn').addEventListener('click', showPreviousSlide);
document.getElementById('nextBtn').addEventListener('click', showNextSlide);

function showPreviousSlide() {
    hideAllSlides();
    if (currentIndex === 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex--;
    }
    slides[currentIndex].classList.add('active');
}

function showNextSlide() {
    hideAllSlides();
    if (currentIndex === totalSlides - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    slides[currentIndex].classList.add('active');
}

function hideAllSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
}

// Показати перший слайд по замовчуванню
slides[currentIndex].classList.add('active');