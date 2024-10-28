function handleSignUp(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log("Sign-Up Data:", { username, email, password });
    alert("Sign-up data received for testing.");
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log("Login Data:", { username, password });
    alert("Login data received for testing.");
}