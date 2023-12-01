
// Function to open the sign-in modal
function openSignInModal() {
  var modal = document.getElementById('signinModal');
  modal.style.display = 'flex';
}

// Function to close the sign-in modal
function closeSignInModal() {
  var modal = document.getElementById('signinModal');
  modal.style.display = 'none';
}

// Function to handle sign-in
function signIn(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Retrieve username and password from the form
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Perform authentication (add your own logic here)
  // For simplicity, let's assume a hardcoded username and password
  if (username === 'ethan' && password === '123') {
    alert('Sign-in successful!');
    closeSignInModal();
    // Change the text of the "Sign In" link to "Account"
    var signInButton = document.getElementById('signin-link');
    signInButton.innerHTML = 'Account';
  } else {
    alert('Invalid username or password. Please try again.');
  }
}



// Function to simulate signing in (replace this with your actual sign-in logic)
function simulateSignIn() {
  // Assuming the user has successfully signed in
  // Change the text of the "Sign In" button to "Account"
  var signInButton = document.getElementById('signin-link');
  signInButton.innerHTML = 'Account';
}
