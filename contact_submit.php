<!DOCTYPE html>
<html lang="ja">
<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="ポートフォリオのお問い合わせに失敗しました。">
<meta name="keywords" content="Portfolio,ポートフォリオ,Web制作,自主制作,個人制作,お問い合わせ">

<title>送信に失敗しました - Y.K.Portfolio</title>

<?php include './inc/head.php'; ?>

</head>

<body id="contact-page">
  <div class="container main-bg-img">
    <div class="content">

      <?php include './inc/header.php'; ?>
  
    <section>

    <?php 
      include dirname(__FILE__) . '/inc/contact_function.php';

      if( isset($_POST['name']) ){

        // 確認画面にリダイレクト
        header('Location: /contact_confirm.php', 307);

        // それぞれの項目をCookieに登録
        // 有効期限は10分

        set_contanct_cookies($_POST['name'], $_POST['company'], $_POST['tel'], $_POST['email'], $_POST['content']);

      }else{
        // 万が一、POSTメソッドがなかった場合、お問い合わせページに戻る
        echo 'システムエラーです。5秒後に、お問い合わせページへ戻ります。';
        echo 
          '<script>
            setTimeout(function () {
              window.location.href= "/contact.php";
            
            },5000);
          </script>';
      }
    ?>

    </section>

    </div> <!-- /.content -->

  <?php include './inc/footer.php'; ?>
  </div> <!-- /.container -->
</body>
</html>