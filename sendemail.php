<html>
 <head>
     <link href="css/style.css" rel="stylesheet">
 </head>
 <body class="meetings">

<?php
// 	header('Content-type: application/json');

    $name = @trim(stripslashes($_POST['name']));
    $email = @trim(stripslashes($_POST['email']));
    $usn = @trim(stripslashes($_POST['usn']));
    $phone = @trim(stripslashes($_POST['phone']));
	$comments = @trim(stripslashes($_POST['comments']));

    $email_from = $email;
    $email_to = 'gitoratorsclub@gmail.com';//replace with your email

    $body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'USN: ' . $usn . "\n\n" . 'Contact No.: ' . $phone . "\n\n" . 'Comments: ' . $comments;

    $success = @mail($email_to, 'Orators Club', $body, 'From: <'.$email_from.'>');
    echo "<META http-equiv=\"refresh\" content=\"0;URL=https://oratorsclub.000webhostapp.com/contact.html\">";
    die;

?>
    </body>
</html>
