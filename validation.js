// Login Form Validation
function validateLoginForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Email validation
    if (!email.includes('@')) {
        alert('Please enter a valid email address (must contain @)');
        return false;
    }
    
    // Password validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }
    
    alert('Login successful!');
    return true;
}

// Register Form Validation  
function validateRegisterForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Name validation
    if (name.trim() === '') {
        alert('Please enter your full name');
        return false;
    }
    
    // Email validation
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // Username validation
    if (username.length < 3) {
        alert('Username must be at least 3 characters long');
        return false;
    }
    
    // Password validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }
    
    alert('Registration successful!');
    return true;
}