<?php
//lets get all form values
$name = $_POST['first'];
$last = $_POST['last'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
if(!empty($email) && !empty($message)){ // if email and message is not empty 
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){//if user enter the validate email
$receiver = "lashukalashu@gmail.com";//email receiver adress
$subject = "From: $name <>?";
$body = "Name: $name\nEmail: $email\nPhone: $phone\nLast: $last";
$sender = "From: $email";
if(mail($receiver, $subject, $body, $sender)){
    echo"Your message has been sent";

}else{
    echo "sorry Failed to send your message!";
}
    }else{
        echo"Enter the validate email";
    }

}else{
    echo"Email and password  field is required";
}

?>