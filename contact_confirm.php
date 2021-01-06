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
              <td><?= $_COOKIE['contact']['name']; ?></td>
            </tr>

            <tr>
              <th>電話番号(任意)：</th>
              <td>
                <?php 
                  if( !isset($_COOKIE['contact']['tel']) || $_COOKIE['contact']['tel'] === ''){
                    echo '未入力です。';
                  }else{
                    echo $_COOKIE['contact']['tel'];
                  } ?>
              </td>
            </tr>

            <tr>
              <th>メールアドレス：</th>
              <td><?= $_COOKIE['contact']['email']; ?></td>
            </tr>
            <tr>
              <th>お問い合わせ内容：</th>
              <td><pre><?= $_COOKIE['contact']['content']; ?></pre></td>
            </tr>
            
          </tbody>
        </table>

        <div class="confirm-btn-wrapp">
          <form action="/contact_result.php" method="post"> 
            <input type="submit" value="送信" name="submit_yes">
          </form>

          <form action="/contact.php" method="post">
            <input type="submit" value="内容を修正" name="submit_fix">
            <input type="submit" value="取り消し" name="submit_cancel">
          </form>
        </div><!-- /.confirm-btn-wrapp -->
    
      </section>
    </div> <!-- /.content -->

    <?php include './inc/footer.php'; ?>
      
  </div> <!-- /.container -->

</body>
</html>