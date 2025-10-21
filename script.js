
document.addEventListener("DOMContentLoaded", function () {
    const timeEl = document.getElementById("currentTime");
    if (timeEl) {
        function updateTime() {
            timeEl.textContent = Date.now();
        }
        updateTime();
        setInterval(updateTime, 1000);
    }

    // Contact form validation
    const form = document.getElementById("Form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Input references
            const name = document.getElementById("fullName");
            const email = document.getElementById("email");
            const subject = document.getElementById("subject");
            const message = document.getElementById("message");
            const successMessage = document.getElementById("successMessage");

            // Error spans
            const errors = {
                name: document.getElementById("error-name"),
                email: document.getElementById("error-email"),
                subject: document.getElementById("error-subject"),
                message: document.getElementById("error-message"),
            };

            // Reset messages
            Object.values(errors).forEach((err) => {
                if (err) err.textContent = "";
            });
            if (successMessage) successMessage.style.display = "none";

            let valid = true;

            // Name
            if (!name || !name.value.trim()) {
                if (errors.name) errors.name.textContent = "Full name is required.";
                valid = false;
            }

            // Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !email.value.trim()) {
                if (errors.email) errors.email.textContent = "Email is required.";
                valid = false;
            } else if (!emailPattern.test(email.value)) {
                if (errors.email) errors.email.textContent = "Enter a valid email address.";
                valid = false;
            }

            // Subject
            if (!subject || !subject.value.trim()) {
                if (errors.subject) errors.subject.textContent = "Subject is required.";
                valid = false;
            }

            // Message
            if (!message || message.value.trim().length < 10) {
                if (errors.message) errors.message.textContent = "Message must be at least 10 characters.";
                valid = false;
            }

            // If valid
            if (valid) {
                if (successMessage) successMessage.style.display = "block";
                form.reset();
            }
        });
    }
});
