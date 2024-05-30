<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize inputs
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(strip_tags(trim($_POST['subject'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format");
    }

    // Create email headers
    $mailheader = "From: $name <$email>\r\n";
    $recipient = "joshua.holtz@outlook.com";

    // Send email
    if (mail($recipient, $subject, $message, $mailheader)) {
        echo '
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Form</title>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="container">
                <h1>Thank you for contacting me. I will get back to you as soon as possible!</h1>
                <p class="back">Go back to the <a href="index.html">homepage</a>.</p>
            </div>
        </body>
        </html>
        ';
    } else {
        echo "Error sending email!";
    }
} else {
    echo "Invalid request method.";
}
?>
