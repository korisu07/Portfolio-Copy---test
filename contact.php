<!DOCTYPE html>
<html lang="ja">

  <?php include './inc/head.php'; ?>

<body id="contact-page">

<div id="container">

  <div id="content">

    <?php include './inc/header.php'; ?>

    <section>
      <h2>Contact</h2>
      <p>お問い合わせ等はこちらからお願いします。</p>
          
      <div id="googleform">
        <form>
          <p>
            <label>名前（必須）：</label>
            <input id="name" type="text" name="name" placeholder="全角で入力してください" required>
          </p>
          <p>
            <label>電話番号（任意）：</label>
            <input id="tel" type="tel" name="tel" placeholder="ハイフンなしで入力してください">
          </p>
          <p>
            <label>メールアドレス（必須）：</label>
            <input id="email" type="email" name="email" placeholder="半角英数字で入力してください" required>
          </p>
          <p>
            <label>お問い合わせ内容（必須）：</label>
            <textarea id="otoiawase" name="otoiawase" placeholder="具体的な内容を入力してください。" required></textarea>
          </p>
          <p>
            <input id="submitBtn" type="submit" value="送信">
          </p>
        </form>
  
        <!-- 送信が成功したときに表示するテキスト -->
        <div id="success">
          <h2>送信完了しました。ありがとうございました。</h2>
        </div>
    
        <!-- 送信が失敗したときに表示するテキスト -->
        <div id="error">
          <h2>送信に失敗しました。ページを更新して再度送信してください。</h2>
        </div>
      </div> <!-- Google Form -->
  
    </section>

  </div> <!-- content -->

  <?php include './inc/footer.php'; ?>

</div> <!-- container -->

<!-- ↓↓Form用 -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>

<script src="./js/contact.js"></script>

<!-- ↑↑Form用 -->


</body>
</html>