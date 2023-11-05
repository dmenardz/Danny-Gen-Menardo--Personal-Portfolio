<?
$name = $_POST['name'];
$email = $_POST['name'];;
$message = $_POST['message'];



require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;


//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

$mail->isSMTP(); 
$mail->SMTPAuth   = true;  
$mail->Host = 'smtp.googlemail.com';
$mail->Username   = 'menardo.dannygenn@gmail.com';                     //SMTP username
$mail->Password   = 'hehczjcpvekggifv';                               //SMTP password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
$mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//Recipients
    $mail->setFrom($name, $email);
    $mail->addAddress('menardo.dannygenn@gmail.com');               //Name is optional
    $mail->Subject = $subject;
    $mail->Body = $message;

    $mail->send();
    echo "email sent";
?>

