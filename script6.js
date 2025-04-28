document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from submitting

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    if (!name || !email || !message) {
        errorMsg.textContent = "Please fill out all fields.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMsg.textContent = "Please enter a valid email address.";
        return;
    }

    // If everything is valid
    errorMsg.style.color = "green";
    errorMsg.textContent = "Form submitted successfully!";
});
