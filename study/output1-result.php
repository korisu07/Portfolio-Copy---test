<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Output 1</title>
</head>
<body>

  <?php 
    $left = $_POST['plus_left'];
    $right = $_POST['plus_right'];
    
    echo $left + $right; ?>

  <p><a href="/study/output1.php">戻る</a></p>
</body>
</html>