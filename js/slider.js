document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    const totalSlides = slide.length;

    function updateSlidePosition() {
        slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    }

    function showNextSlide() {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateSlidePosition();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        updateSlidePosition();
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    setInterval(showNextSlide, 3000); // 自动轮播时间间隔设置为3秒
});
