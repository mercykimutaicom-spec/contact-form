// 1. Select the form and input fields
// Initialize EmailJS
emailjs.init({
  publicKey: "bIGhNuJxZpcvfCvcy",
});
const contactForm = document.getElementById("contactForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const successMessage = document.getElementById("successMessage");

// 2. Email validation function
function isValidEmail(emailAddress) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(emailAddress);
}

function showError(input, errorText) {
  input.classList.add("input-error");
  input.setAttribute("aria-invalid", "true");

  let errorMessage = input.parentElement.querySelector(".error-message");

  if (!errorMessage) {
    errorMessage = document.createElement("small");
    errorMessage.className = "error-message";
    input.insertAdjacentElement("afterend", errorMessage);
  }

  errorMessage.textContent = errorText;
}

// 4. Remove an error message
function clearError(input) {
  input.classList.remove("input-error");
  input.removeAttribute("aria-invalid");

  const errorMessage = input.parentElement.querySelector(".error-message");

  if (errorMessage) {
    errorMessage.remove();
  }
}
// 5. Listen for form submission
contactForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  // Clear previous errors
  const inputs = [fullName, email, subject, message];

  inputs.forEach((input) => clearError(input));

  successMessage.textContent = "";

  let isFormValid = true;

  // Check full name
  if (fullName.value.trim() === "") {
    showError(fullName, "Please enter your full name.");
    isFormValid = false;
  }

  // Check email
  if (email.value.trim() === "") {
    showError(email, "Please enter your email address.");
    isFormValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    showError(email, "Please enter a valid email address.");
    isFormValid = false;
  }

  // Check subject
  if (subject.value.trim() === "") {
    showError(subject, "Please enter a subject.");
    isFormValid = false;
  }

  // Check message
  if (message.value.trim() === "") {
    showError(message, "Please enter your message.");
    isFormValid = false;
  }

  // Send email only if validation passes
  if (isFormValid) {
    successMessage.classList.remove("success-message");
    successMessage.textContent = "Sending your message...";

    const templateParams = {
      fullName: fullName.value.trim(),
      email: email.value.trim(),
      subject: subject.value.trim(),
      message: message.value.trim(),
    };

    try {
      await emailjs.send("service_xdpqf5s", "template_i71oqvq", templateParams);

      successMessage.textContent =
        "Thank you! Your message has been sent successfully.";

      successMessage.classList.add("success-message");

      contactForm.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      successMessage.textContent =
        "Sorry, your message could not be sent. Please try again.";

      successMessage.classList.remove("success-message");
    }
  }
});

// 7. Remove errors while the user corrects them
[fullName, email, subject, message].forEach((input) => {
  input.addEventListener("input", function () {
    clearError(input);
  });
});
