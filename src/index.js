import './style.css';

function initImageCarousel() {
  const carousel = document.querySelector('.slider');
  const leftBtn = document.querySelector('#left-btn');
  const rightBtn = document.querySelector('#right-btn');
  const images = document.querySelectorAll('.image');
  const totalImage = images.length;

  let currentImage = 0;
  updateDots(currentImage);

  console.log(currentImage);
  rightBtn.addEventListener('click', () => {
    currentImage++;

    if (currentImage >= totalImage) {
      currentImage = 0;
    }
    updateDots(currentImage);
    carousel.style.transform = `translateX(-${currentImage * 300}px)`;
  });
  leftBtn.addEventListener('click', () => {
    currentImage--;

    if (currentImage < 0) {
      currentImage = totalImage - 1;
    }
    updateDots(currentImage);
    carousel.style.transform = `translateX(-${currentImage * 300}px)`;
  });
}
initImageCarousel();

function updateDots(currentImage) {
  const dots = document.querySelectorAll('.dot');

  dots.forEach((dot) => {
    dot.classList.remove('selected');
  });
  let selectedDot = dots[currentImage];
  selectedDot.classList.add('selected');
}


