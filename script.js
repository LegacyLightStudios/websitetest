// Change Text Functionality
document.getElementById("changeTextBtn").addEventListener("click", function() {
    const dynamicText = document.getElementById("dynamicText");
    dynamicText.textContent = "The text has been changed! JavaScript is awesome!";
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("formMessage").textContent = `Thank you for your message, ${name}! We'll get back to you soon.`;
    } else {
        document.getElementById("formMessage").textContent = "Please fill out all fields.";
    }
});
