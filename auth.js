function handleSignUp(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

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