
// Function to handle sign-in
function signIn(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Retrieve username and password from the form
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Perform authentication
  // we're using a hardcoded username and password
  if (username === 'ethan' && password === '123') {
    alert('Sign-in successful!'); // Or any action you want on successful login
    // You can redirect the user to account page upon successful login
    window.location.href = 'account.html'; // Redirect to the user's account page
  } else {
    alert('Invalid username or password. Please try again.');
  }
}
//slider//
document.addEventListener('DOMContentLoaded', () => {
  const backButton = document.querySelector('.bck');
  const nextButton = document.querySelector('.nxt');
  const productsContainer = document.querySelector('.products-container');
// Initial scroll position and scroll amount
  let scrollPosition = 0;
  const scrollAmount = 340;
// Event listener for moving the slider backward
  backButton.addEventListener('click', () => {
    if (scrollPosition > 0) {
      scrollPosition -= scrollAmount;
      // Smoothly scroll to the updated position
      productsContainer.scrollTo({
        top: 0,
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  });
// Event listener for moving the slider forward
  nextButton.addEventListener('click', () => {
    const containerWidth = productsContainer.clientWidth;
    const totalWidth = productsContainer.scrollWidth;

    if (scrollPosition < totalWidth - containerWidth) {
      scrollPosition += scrollAmount;
      productsContainer.scrollTo({
        top: 0,
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  });

  // New references for the second slider
  const backButtonBrands = document.querySelector('.bck-brands');
  const nextButtonBrands = document.querySelector('.nxt-brands');
  const productsContainerBrands = document.querySelector('.products-container-brands');
// Initial scroll position and scroll amount
  let scrollPositionBrands = 0;
  const scrollAmountBrands = 340;
// Event listener for moving the slider backward
  backButtonBrands.addEventListener('click', () => {
    if (scrollPositionBrands > 0) {
      scrollPositionBrands -= scrollAmountBrands;
      productsContainerBrands.scrollTo({
        top: 0,
        left: scrollPositionBrands,
        behavior: 'smooth'
      });
    }
  });

  nextButtonBrands.addEventListener('click', () => {
    const containerWidthBrands = productsContainerBrands.clientWidth;
    const totalWidthBrands = productsContainerBrands.scrollWidth;

    if (scrollPositionBrands < totalWidthBrands - containerWidthBrands) {
      scrollPositionBrands += scrollAmountBrands;
      // Smoothly scroll to the updated position
      productsContainerBrands.scrollTo({
        top: 0,
        left: scrollPositionBrands,
        behavior: 'smooth'
      });
    }
  });
});
