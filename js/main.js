document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const contactForm = document.querySelector('form[action="#"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Validate form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');

            if (!name.value || !email.value || !subject.value || !message.value) {
                alert('Please fill in all fields.');
                return;
            }

            if (!validateEmail(email.value)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Message sent successfully!');
            // Here you can add code to send form data to the server
            contactForm.reset(); // Clear the form
        });
    }

    // Login handling
    const loginForm = document.querySelector('.login form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Validate login fields
            const username = document.getElementById('username');
            const password = document.getElementById('password');

            if (!username.value || !password.value) {
                alert('Please fill in both fields.');
                return;
            }

            // Simulate login (replace with actual login logic)
            if (username.value === 'user' && password.value === 'password') {
                alert('Login successful!');
                window.location.href = 'index.html'; // Redirect to home page
            } else {
                alert('Invalid username or password.');
            }
        });
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
