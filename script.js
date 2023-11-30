// Add a toggle button to the top bar for mobile devices
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Menu';
toggleButton.classList.add('toggle-button');

document.querySelector('.top-bar').appendChild(toggleButton);

toggleButton.addEventListener('click', function() {
  const navLinks = document.querySelector('.nav-links');

  if (navLinks.classList.contains('hidden')) {
    navLinks.classList.remove('hidden');
  } else {
    navLinks.classList.add('hidden');
  }
});
const imageContainer = document.querySelector('.container');
const textOverlay = document.querySelector('.textoverlay1');
const image = document.getElementById('myImage1');

const positionTextOverlay = () => {
  const imageWidth = image.offsetWidth;
  const imageHeight = image.offsetHeight;

  textOverlay.style.width = `${imageWidth}px`;
  textOverlay.style.height = `${imageHeight}px`;
};

window.addEventListener('resize', positionTextOverlay);
positionTextOverlay();
