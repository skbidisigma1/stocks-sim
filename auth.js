function handleSignUp(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (password.length < 8) {
        const messageDiv = document.getElementById('error-message');
        messageDiv.textContent = "Password must be at least 8 characters long.";
        messageDiv.style.color = "red";
        return;
    }

    document.cookie = `signupData=${encodeURIComponent(
        JSON.stringify({ username, email, password })
    )}; path=/; max-age=259200`;

    window.location.href = "login.html";
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const cookies = document.cookie.split("; ");
    const signupDataCookie = cookies.find((cookie) =>
        cookie.startsWith("signupData=")
    );
    
    if (signupDataCookie) {
        const signupData = JSON.parse(
            decodeURIComponent(signupDataCookie.split("=")[1])
        );
        
        if (username === signupData.username && password === signupData.password) {
            window.location.href = "profile.html"; // Redirect to profile page if login is successful
        } else {
            const messageDiv = document.getElementById('error-message');
            messageDiv.textContent = "Incorrect username or password.";
            messageDiv.style.color = "red";
        }
    }
}