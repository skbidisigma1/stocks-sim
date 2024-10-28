function handleSignUp(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (password.length < 8) {
        const messageDiv = document.getElementById('error-message');
        messageDiv.textContent = "Password must be at least 8 characters long.";
        messageDiv.style.color = "red";
        return;
    }

    document.cookie = `signupData=${encodeURIComponent(
        JSON.stringify({ username, password })
    )}; path=/; max-age=259200`;
}

function viewSignUpData() {
    const cookies = document.cookie.split("; ");
    const signupDataCookie = cookies.find((cookie) =>
        cookie.startsWith("signupData=")
    );
    if (signupDataCookie) {
        const signupData = JSON.parse(
            decodeURIComponent(signupDataCookie.split("=")[1])
        );
        document.body.innerHTML += `<p>Username: ${signupData.username}, Password: ${signupData.password}</p>`;
    }
}