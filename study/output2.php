<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Output 2 ｜ ヒアドキュメント</title>
</head>
<body>
  <?php 
    $content1 = <<< test
ヒアドキュメント
ここに内容を表示します。
改行も可能です。
test;

  $content2 = "改行コードをOSごとに対応する方法。" . PHP_EOL;
  $content2 .= "ここに内容を表示します。" . PHP_EOL;
  $content2 .= "改行も可能です。" . PHP_EOL;

  $object_test = 1;
  var_dump($object_test);
  ?>

  <p><pre><?=$content1?></pre></p>
  <p><pre><?=$content2?></pre></p>

  <?php  
    //配列
    $array_test = ['キムチ','粉チーズ','チャーハン'];
    $array_test[] = 'エビ'; //エビを追加
    $array_test[] = 'ネギ'; //ネギを追加
  ?>

  <p><?=$array_test[0]?></p>
  <p><?=$array_test[1]?></p>
  <p><?=$array_test[2]?></p>
  <p><?=$array_test[3]?></p>
  <p><?=$array_test[4]?></p>
  <p><pre><?php print_r($array_test); ?></pre></p>

<!-- 出力結果
  Array
(
    [0] => キムチ
    [1] => 粉チーズ
    [2] => チャーハン
    [3] => エビ
    [4] => ネギ
) -->

  <p><pre><?php var_dump($array_test); ?></pre></p>
  <!-- 出力結果
    array(5) {
  [0]=>
  string(9) "キムチ"
  [1]=>
  string(12) "粉チーズ"
  [2]=>
  string(15) "チャーハン"
  [3]=>
  string(6) "エビ"
  [4]=>
  string(6) "ネギ"
} -->

<?php echo count($array_test); ?>

<?php //連想配列
  $user = [
    'id' => '001',
    'name' => '太郎',
    'age' => '21',
    'place' => '東京',
  ];
  $user['job'] = '伝統工芸士'; //職業を追加
  $user['hobby'] = '散歩'; //趣味を追加

  $userData2 = ['002', '花子', '23', '大阪'];
  // スカラー変数
  list($userId2, $userName2, $userAge2, $userPlace2) = $userData2;
?>
<p>ユーザー1:<?=$user['name']?></p>

<p>ユーザー2:<?=$userName2?></p>

<?php 
  //定数
  define('tax', 0.08);
  $price = 100;
  
  echo '値段は' , $price + ($price * tax) , '円です。';
?>

</body>
</html>