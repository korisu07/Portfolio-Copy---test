<!DOCTYPE html>
<html lang="jp">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php 

    mb_language("Japanese");
    mb_internal_encoding("UTF-8");

    $to = $_POST['to']; //送信先
    $title = $_POST['title']; //件名
    $message = $_POST['message']; //本文
    $header = "From: $to";

    if(mb_send_mail($to, $title, $message, $header)){
      echo "成功です！";
    }else{
      echo "失敗です。";
    }
?>
</body>
</html>