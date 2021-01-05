<?php

  if( isset($_POST['submit_yes']) ){

    if( !isset($_COOKIE["flagment"] )){

      // 重複防止のフラグ。有効期限は5分
      setcookie("flagment", "1", time()+300);

      // ここに送信処理


    // Cookieを削除
      
    setcookie("contact[name]", "", time()-300);
    setcookie("contact[tel]", "", time()-300);
    setcookie("contact[email]", "", time()-300);
    setcookie("contact[content]", "", time()-300);

      $result_message = '送信ありがとうございました。';

    }else if( !isset($_COOKIE["contact"]) ){

      $result_message = '送信に失敗しました。不正な操作です。';

    }else{
      
      $result_message = '送信に失敗しました。内容が重複しています。';

    }



  }else if( isset($_POST['submit_no']) ){

    header('Location: /contact.php', 307);

    if( isset($_COOKIE["flagment"]) ){
      setcookie("contact[name]", "", time()-300);
      setcookie("contact[tel]", "", time()-300);
      setcookie("contact[email]", "", time()-300);
      setcookie("contact[content]", "", time()-300);
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
        <h2>送信結果</h2>
        <p class="mb30"><?= $result_message ?></p>
    
      </section>

    </div> <!-- /.content -->

      <?php include './inc/footer.php'; ?>
      
  </div> <!-- /.container -->
</body>
</html>