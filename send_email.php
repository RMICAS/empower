<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php'; // Ensure PHPMailer is installed

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $message = htmlspecialchars($_POST["message"]);

    $mail = new PHPMailer(true);

    try {
        // Enable SMTP debugging (change to 0 when working)
        $mail->SMTPDebug = 2;

        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host       = 'fennec.aserv.co.za'; // Afrihost SMTP server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'ayanda@empowersustainableenergy.com'; // Your email
        $mail->Password   = 'Afrihost#Password@2025'; // Replace with actual password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Use SSL
        $mail->Port       = 465; // Correct SMTP port

        // Sender & Recipient
        $mail->setFrom('ayanda@empowersustainableenergy.com', 'Website Contact');
        $mail->addAddress('ayanda@empowersustainableenergy.com'); // Send to yourself

        // Email Content
        $mail->isHTML(false); // Use plain text
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

        if ($mail->send()) {
            echo "Success";
        } else {
            echo "Error sending email.";
        }
    } catch (Exception $e) {
        echo "Error: {$mail->ErrorInfo}"; // Show error details
    }
}
?>
