document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check username and password
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect to the home page
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password. Please try again.");
        // Clear the form fields
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
});