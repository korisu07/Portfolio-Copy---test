<!DOCTYPE html>
<html lang="ja">
<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="ポートフォリオ（作品集）です。">
<meta name="keywords" content="Portfolio,ポートフォリオ,Web制作,自主制作,個人制作">

<title>Y.K.Portfolio</title>

<?php include './inc/head.php'; ?>

</head>

<body id="contact-page">
  <div class="container main-bg-img">
    <div class="content">

      <?php include './inc/header.php'; ?>

      <section>
        <h2>Contact</h2>
        <p class="mb30">お問い合わせ等は、こちらからお願いします。</p>
            
        <form action="./contact_submit.php" method="post">
          <p>
            <label>お名前<span class="form_req">必須</span></label>
            <input type="text" name="name" placeholder="必ずご入力ください。" required>
          </p>
          <p>
            <label>会社名<span>任意</span></label>
            <input type="text" name="company" placeholder="ご入力は任意です。">
          </p>
          <p>
            <label>電話番号<span>任意</span></label>
            <input type="tel" name="tel" placeholder="ハイフンなしでご入力ください。">
          </p>
          <p>
            <label>メールアドレス<span class="form_req">必須</span></label>
            <input type="email" name="email" placeholder="半角英数字でご入力ください。" required>
          </p>
          <p>
            <label>お問い合わせ内容<span class="form_req">必須</span></label>
            <textarea name="content" placeholder="具体的な内容をご入力ください。(1000文字以内)" maxlength="1000" required></textarea>
          </p>
          <p>
            <input type="submit" value="送信">
          </p>
        </form>
    
      </section>

    </div> <!-- /.content -->

    <?php 
      // 「内容を修正」を押していて、かつCookieが残っている場合にJSを読み込み
      if( isset($_COOKIE['contact']) && isset($_POST['submit_fix']) ){
        echo '<script src="/js/fix_contact.js"></script>';
      }// その他の場合、Cookieを削除
      else if(isset($_COOKIE['contact'])){

        include dirname(__FILE__) . '/inc/contact_function.php';

        // Cookieをすべて削除
        clear_contanct_cookies();
      }

      // footer 読み込み
      include './inc/footer.php';

    ?>

  </div> <!-- /.container -->

</body>
</html>