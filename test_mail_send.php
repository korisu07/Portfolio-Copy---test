<?php 
    mb_language("Japanese");
    mb_internal_encoding("UTF-8");

    $to = $_POST['to'];
    $title = $_POST['title'];
    $message = $_POST['message'];
    $headers = "From: from@example.com";

    if(mb_send_mail($to, $title, $message, $headers)){
      echo "成功です！";
    }else{
      echo "失敗です…。";
    }

  ?>