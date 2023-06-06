document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var contactNumber = document.getElementById("contact-number").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform form validation
    if (firstName.trim() === "") {
        alert("Please enter your first name.");
        return;
    }

    if (lastName.trim() === "") {
        alert("Please enter your last name.");
        return;
    }

    if (contactNumber.trim() === "") {
        alert("Please enter your contact number.");
        return;
    }

    if (email.trim() === "") {
        alert("Please enter your email address.");
        return;
    }

    if (address.trim() === "") {
        alert("Please enter your address.");
        return;
    }

    if (username.trim() === "") {
        alert("Please enter a username.");
        return;
    }

    if (password.trim() === "") {
        alert("Please enter a password.");
        return;
    }

    // Registration successful
    alert("Registration successful!");
    // Redirect to the home page
    window.location.href = "index.html";
});