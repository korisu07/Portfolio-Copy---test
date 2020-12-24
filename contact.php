<?php 
  if( isset($_COOKIE["flagment"]) ){
    setcookie("flagment", "", time()-300);
  }
?>

<!DOCTYPE html>
<html lang="ja">

  <head>

    <?php include './inc/head.php'; ?>

  </head>

<body id="contact-page">

<div id="container">

  <div id="content">

    <?php include './inc/header.php'; ?>

    <section>
      <h2>Contact</h2>
      <p class="mb30">お問い合わせ等は、こちらからお願いします。</p>
          
        <form action="./contact_confirm.php" method="post">
          <p>
            <label>お名前（必須）：</label>
            <input type="text" name="name" placeholder="全角で入力してください" required>
          </p>
          <p>
            <label>電話番号（任意）：</label>
            <input type="tel" name="tel" placeholder="ハイフンなしで入力してください">
          </p>
          <p>
            <label>メールアドレス（必須）：</label>
            <input type="email" name="email" placeholder="半角英数字で入力してください" required>
          </p>
          <p>
            <label>お問い合わせ内容（必須）：</label>
            <textarea name="contact_content" placeholder="具体的な内容を入力してください。" required></textarea>
          </p>
          <p>
            <input type="submit" value="送信">
          </p>
        </form>
  
    </section>


  <?php include './inc/footer.php'; ?>

</div> <!-- container -->


</body>
</html>