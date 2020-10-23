<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

<form action="./test_mail_send.php" method="post">
  <p>送信先</p><input type="email" name="to">
  <p>件名</p><input type="text" name="title">
  <p>メッセージ</p><textarea name="message" cols="30" rows="10"></textarea>
  <p><input type="submit" name="send" value="送信"></p>
</form>

</body>
</html>
