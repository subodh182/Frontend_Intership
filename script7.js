document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    if (!name || !email || !message) {
        errorMsg.textContent = "Please fill out all fields.";
        errorMsg.classList.remove("text-success");
        errorMsg.classList.add("text-danger");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMsg.textContent = "Please enter a valid email address.";
        errorMsg.classList.remove("text-success");
        errorMsg.classList.add("text-danger");
        return;
    }

    errorMsg.textContent = "Form submitted successfully!";
    errorMsg.classList.remove("text-danger");
    errorMsg.classList.add("text-success");
});
