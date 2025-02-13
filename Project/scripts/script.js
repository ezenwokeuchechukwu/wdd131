// Update footer year dynamically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Check if the contact form exists before adding an event listener
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let output = document.getElementById("output");

        // Basic validation
        if (name === "" || email === "") {
            output.innerHTML = `<span style="color: red;">⚠️ Please enter both name and email.</span>`;
            return;
        }

        // Email validation using regex
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            output.innerHTML = `<span style="color: red;">⚠️ Please enter a valid email address.</span>`;
            return;
        }

        // Save to localStorage
        localStorage.setItem("username", name);
        localStorage.setItem("useremail", email);

        // Display success message
        output.innerHTML = `<span style="color: green;">✅ Thank you, ${name}! We will contact you at ${email}.</span>`;

        // Clear form fields after submission
        contactForm.reset();
    });
}
