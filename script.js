
// 1. Select the form and input fields
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
contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Clear previous errors
    const inputs = [fullName, email, subject, message];

    inputs.forEach(input => clearError(input));

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

    // 6. Success state
    if (isFormValid) {

        successMessage.textContent =
            "Thank you! Your form has been validated successfully.";

        successMessage.classList.add("success-message");

        contactForm.reset();
    }

});

// 7. Remove errors while the user corrects them
[fullName, email, subject, message].forEach(input => {

    input.addEventListener("input", function() {
        clearError(input);
    });

});
