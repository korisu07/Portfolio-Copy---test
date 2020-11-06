<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Output 2-2 ｜ 配列の合成</title>
</head>
<body>

<?php 
  $array1 = ['アイロン', '掃除機'];
  $array2 = ['オーブン', '冷蔵庫', 'エアコン'];

?>
<p>加算の演算子(+)を使った場合：<br><?php print_r($array1 + $array2); ?></p>
<p>array_merge関数の場合：<br><?php print_r(array_merge($array1, $array2)); ?></p>

</body>
</html>