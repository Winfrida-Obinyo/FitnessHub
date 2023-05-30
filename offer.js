const fitnessNav = document.querySelector('.fitness-nav');

const options = {
  rootMargin: '-50px 0px 0px 0px',
  threshold: 0.5
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fitnessNav.classList.add('animate');
    } else {
      fitnessNav.classList.remove('animate');
    }
  });
}, options);

observer.observe(fitnessNav);


// Get the carousel element
const carousel = document.querySelector('.carousel');
// Apply styles to the carousel
carousel.style.display = 'flex';
carousel.style.alignItems = 'center';
carousel.style.overflowX = 'auto';


// Get the left and right arrow icons
const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');

// Set initial image index
let currentIndex = 0;

// Add event listeners to the arrow icons for image animation
leftArrow.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carousel.children.length - 1;
  }
  updateCarousel();
});

rightArrow.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= carousel.children.length) {
    currentIndex = 0;
  }
  updateCarousel();

});
// Apply styles to the images
images.forEach((image) => {
    image.style.width = '50px'; 
    image.style.height = 'auto';  
    image.style.marginRight = '10px'; 
  });

// Function to update the carousel
function updateCarousel() {
  const images = carousel.querySelectorAll('img');

  // Reset the animation for all images
  images.forEach((image) => {
    image.style.transition = 'none';
    image.style.transform = 'translateX(0)';
  });

  // Apply animation to the current image
  images[currentIndex].style.transition = 'transform 0.5s ease-in-out';
  images[currentIndex].style.transform = 'translateX(-100%)';

  // Apply transition and transform to the current and next images
  const currentImage = images[currentIndex];
  const nextIndex = (currentIndex + 1) % images.length;
  const nextImage = images[nextIndex];

  currentImage.style.transition = 'transform 0.5s ease-in-out';
  currentImage.style.transform = 'translateX(-100%)';

  nextImage.style.transition = 'transform 0.5s ease-in-out';
  nextImage.style.transform = 'translateX(0)';
}


// Initial update to show the first image
updateCarousel();