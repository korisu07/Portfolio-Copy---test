<?php 

  setcookie("contact[name]", (string) $_POST['name'], time()+300);
  setcookie("contact[tel]", (string) $_POST['tel'], time()+300);
  setcookie("contact[email]", (string) $_POST['email'], time()+300);
  setcookie("contact[content]", (string) $_POST['contact_content'], time()+300);

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
        <h2>送信確認</h2>
        <p class="mb30">こちらの内容でよろしいですか？</p>
            
        <table>
          <thead>
            <tr>
              <th colspan="2">送信内容</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>お名前：</th>
              <td><?= $_POST['name'] ?></td>
            </tr>

            <tr>
              <th>電話番号：</th>
              <td>
                <?php 
                  if( is_null($_POST['tel']) || $_POST['tel'] === ""){
                    echo '未入力です。(任意)';
                  }else{
                    echo $_POST['tel'];
                  } ?>
              </td>
            </tr>

            <tr>
              <th>メールアドレス：</th>
              <td><?= $_POST['email'] ?></td>
            </tr>
            <tr>
              <th>お問い合わせ内容：</th>
              <td><pre><?= $_POST['contact_content'] ?></pre></td>
            </tr>
            
          </tbody>
        </table>

        <form action="/contact_result.php" method="post" class="confirm-btn-wrapp"> 
          <input type="submit" value="はい" name="submit_yes">
          <input type="submit" value="いいえ" name="submit_no">
        </form>
    
      </section>
    </div> <!-- /.content -->

    <?php include './inc/footer.php'; ?>
      
  </div> <!-- /.container -->
</body>
</html>