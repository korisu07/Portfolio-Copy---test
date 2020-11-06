<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Output 2-3 ｜ 浮動小数点の計算とリファレンス渡し</title>
</head>
<body>
<h1>浮動小数点の計算とリファレンス渡し</h1>
<?php 
  // 浮動小数点の計算

  // (0.1 + 0.7) × 10を切り捨てする場合

  // 素直に計算する例（丸め誤差がおきる）
  $result1 = floor((0.1 + 0.7) * 10);

  // 文字列型にキャストする（正しい計算結果になる）
  $result2 = floor((string)(0.1 + 0.7) * 10);

  // BCMath関数を使って計算する（正しい計算結果になる）
  $result3 = floor((int)bcmul(bcadd(0.1, 0.7, 2), 10, 2));

  // JavaScriptとの違い

  // JS → 文字列として変換した数字は計算には使用できない（エラーが起きる）
  // PHP → 文字列として変換した数字でも、計算に使用できる！（めちゃ便利）
?>

<h2>浮動小数点</h2>
<h2>(0.1 + 0.7) × 10の切り捨ての計算結果</h2>

<p>result1：<?=$result1?></p>
<p>result2：<?=$result2?></p>
<p>result3：<?=$result3?></p>

<?php 
  // リファレンス渡しの例

  // 通常の上書き
  $greeting1 = 'Hello';
  $greeting2 = 'Hello';
  // 上書き
  $greeting1 = 'World!';

  // リファレンス渡し
  $greeting3 = 'Hello';
  $greeting4 = &$greeting3;
  // 上書き
  $greeting3 = 'World!';
?>

<h2>リファレンス渡しについて</h2>

<h3>出力結果</h3>

<h3>通常の受け渡し</h3>
<p>greeting1：<?=$greeting1?></p>
<p>greeting2：<?=$greeting2?></p>

<p>片方を上書きしても片方だけに反映される。</p>


<h3>リファレンス渡し</h3>
<p>greeting3：<?=$greeting3?></p>
<p>greeting4：<?=$greeting4?></p>

<p>片方を上書きすると両方に反映される。</p>


</body>
</html>