<?php

$con = mysqli_connect('localhost','root');

if($con){
    echo "connection succesful";
} else{
    echo "no connection";
}
 mysqli_select_db($con, 'portfolio');

 $name = $_POST['name'];
 //echo $name;
 $email = $_POST['email'];
 $subject = $_POST['subject'];
 $description = $_POST['description'];

 $query = " insert into portfolio (name, email, subject, description)
 values ('$name', '$email', '$subject' , '$description')";

 echo "$query";

 mysqli_query($con, $query);
 header('location:index.php');
?>