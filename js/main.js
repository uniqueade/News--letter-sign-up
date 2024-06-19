// Select the email input field, form element, and error message element
const emailInput = document.getElementById("email");
const newsletterForm = document.getElementById("newsletter-form");
const emailError = document.getElementById("email-error");

// Add submit event listener to the form
newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Trim whitespace from the input value
  const email = emailInput.value.trim();

  // Reset error message and styling
  emailError.style.display = "none";
  emailInput.classList.remove("invalid");

  // Check if email is empty
  if (email === "") {
    // Display error message and change input field color
    emailError.style.display = "block";
    emailInput.classList.add("invalid");
    return;
  }

  // Check if email format is valid using a regular expression
  if (!isValidEmail(email)) {
    // Display error message and change input field color
    emailError.style.display = "block";
    emailInput.classList.add("invalid");
    return;
  }

  // If email is valid, redirect to success page
  window.location.href = "success.html"; // Replace 'success.html' with your actual success page URL
});

// Function to validate email format using regular expression
function isValidEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for basic email validation
  return emailRegex.test(email); // Returns true if email matches regex pattern, false otherwise
}
