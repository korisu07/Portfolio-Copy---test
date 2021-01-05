<?php

  if( isset($_POST['submit_yes']) ){

    if( !isset($_COOKIE["flagment"] )){

      // 重複防止のフラグ。有効期限は5分
      // このフラグが残っている間は、再投稿できない。
      setcookie("flagment", "1", time()+300);

      // ここに送信処理
      

    // Cookieを削除
      
    setcookie("contact[name]", "", time()-300);
    setcookie("contact[tel]", "", time()-300);
    setcookie("contact[email]", "", time()-300);
    setcookie("contact[content]", "", time()-300);

      $result_head = '送信が完了しました。';
      $result_message = 'ありがとうございました。';

    }else if( isset($_COOKIE["contact"]) ){

      // 連投防止フラグが残っていて、かつCookieがセットされている場合。

      $result_head = '送信に失敗しました。';
      $result_message = '連投はできません。<br>5分ほど時間をあけて、再度お試しください。';

    }else{

      // その他、連投防止フラグが残っている場合。（戻るボタンで押しちゃった場合を想定）

      $result_head = '送信に失敗しました。';
      $result_message = '内容が重複しているか、不正な操作が行われました。';

    }

  }else if( isset($_POST['submit_fix']) ){

    header('Location: /contact.php', 307);

    if( isset($_COOKIE["flagment"]) ){
      setcookie("flagment", "", time()-300);
    }


  }else if( isset($_POST['submit_cancel']) ){
    
    header('Location: /contact.php', 307);

    setcookie("contact[name]", "", time()-300);
    setcookie("contact[tel]", "", time()-300);
    setcookie("contact[email]", "", time()-300);
    setcookie("contact[content]", "", time()-300);

    if( isset($_COOKIE["flagment"]) ){
      setcookie("flagment", "", time()-300);
    }


  }
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <?php include './inc/head.php'; ?>
</head>

<body id="contact-page">
  <div class="container main-bg-img">
    <div class="content">

      <?php include './inc/header.php'; ?>

      <section>
        <h2><?= $result_head ?></h2>
        <p class="mb30"><?= $result_message ?></p>

        <input type="button" value="お問い合わせページに 戻る" onClick="location.href='/contact.php'">
      </section>

    </div> <!-- /.content -->

      <?php include './inc/footer.php'; ?>
      <script src="/js/contact.js"></script>
      
  </div> <!-- /.container -->
</body>
</html>