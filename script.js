
// Function to handle sign-in
function signIn(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Retrieve username and password from the form
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Perform authentication (add your own logic here)
  // For simplicity, let's assume a hardcoded username and password
  if (username === 'ethan' && password === '123') {
    alert('Sign-in successful!'); // Or any action you want on successful login
    // You can redirect the user to another page upon successful login
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

  let scrollPosition = 0;
  const scrollAmount = 340; // Adjust this value to determine how much to scroll per click

  // Function to handle moving the slider backward
  backButton.addEventListener('click', () => {
    if (scrollPosition > 0) {
      scrollPosition -= scrollAmount;
      productsContainer.scrollTo({
        top: 0,
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  });

  // Function to handle moving the slider forward
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
});
