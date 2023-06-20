const images = document.querySelectorAll('.slider img');
const previewImages = document.querySelectorAll('.preview-images img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
  
  previewImages.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

function slideImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

nextButton.addEventListener('click', slideImage);
prevButton.addEventListener('click', prevImage);

previewImages.forEach((image, i) => {
  image.addEventListener('click', () => {
    showImage(i);
  });
});

showImage(currentIndex);
