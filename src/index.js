import './style.css';

const carousel = document.querySelector('.slider');
const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.querySelector('#right-btn');
const images = document.querySelectorAll('.image');
const dots = document.querySelectorAll('.dot');

let totalImage = images.length;
let currentImage = 0;
let autoScrollInterval;

function initImageCarousel() {
  updateDots(currentImage);

  rightBtn.addEventListener('click', () => {
    clearInterval(autoScrollInterval);
    currentImage++;

    if (currentImage >= totalImage) {
      currentImage = 0;
    }
    updateDots(currentImage);
    carousel.style.transform = `translateX(-${currentImage * 300}px)`;
    startAutoScroll();
  });
  leftBtn.addEventListener('click', () => {
    clearInterval(autoScrollInterval);
    currentImage--;

    if (currentImage < 0) {
      currentImage = totalImage - 1;
    }

    updateDots(currentImage);
    carousel.style.transform = `translateX(-${currentImage * 300}px)`;
    startAutoScroll();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(autoScrollInterval);
      currentImage = index;
      carousel.style.transform = `translateX(-${currentImage * 300}px)`;
      updateDots(currentImage);
      startAutoScroll();
    });
  });
}

function updateDots(currentImage) {
  dots.forEach((dot) => {
    dot.classList.remove('selected');
  });
  let selectedDot = dots[currentImage];
  selectedDot.classList.add('selected');
}

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    currentImage++;

    if (currentImage >= totalImage) {
      currentImage = 0;
    }
    carousel.style.transform = `translateX(-${currentImage * 300}px)`;
    updateDots(currentImage);
  }, 5000);
}

initImageCarousel();
startAutoScroll();
