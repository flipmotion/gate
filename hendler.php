<?php
    $user=$_POST['user'];
    $phone=$_POST['phone'];
    $mail=$_POST['mail'];
    $size=$_POST['size'];
 	$to = "head123455@yandex.ru";
    $subject = "Заявка!";
	$message = "<br>User: " . $user . "<br>phone:<br>" . $phone . "<br>mail:<br>" . $mail . "<br>size:<br>" . $size;
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: wth\r\n";
    //Если форма была отправлена, то выводим ее содержимое на экран
    if (isset($_POST["phone"])) { 

        if (!mail($to, $subject, $message, $headers)) {
            $errors[] = "Ошибка, сообщение не отправлено. Попробуйте позже.";
        }
    }
?>
