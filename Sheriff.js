// Function to validate the form
function validateForm() {
    // Get form input values
    var fullName = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var gender = document.getElementById('gender').value;
    
    // Regular expression for validating email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if name field is empty
    if(fullName === ""){
        alert('Please enter your full name');
        return false;
    }
    // Check if email field is empty
    if(email ===""){
        alert('Please enter your email');
        return false;
    }
    // Check if password field is empty
    if(password ===""){
        alert('Please enter your password');
        return false;
    }
    // Check if gender field is empty
    if(gender ==="select"){
        alert('Please select your gender');
        return false;
    }
    
    // Validate email format using regex
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false; // Prevent form submission
    }
    
    // Validate password length (minimum 6 characters)
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return false; // Prevent form submission
    }
    
    // If all validations pass, allow form submission
    return true;
}

// Adding event listener to the submit button
document.querySelector('.btn').addEventListener('click', function(event) {
    // Validate form when the button is clicked
    if (!validateForm()) {
        event.preventDefault(); // Prevent default form submission
    }
});