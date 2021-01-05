<?php 
  if( isset($_POST['name']) ){

    // 確認画面にリダイレクト
    header('Location: /contact_confirm.php', 307);

    // それぞれの項目をCookieに登録
    setcookie("contact[name]", (string) $_POST['name'], time()+300);
    setcookie("contact[tel]", (string) $_POST['tel'], time()+300);
    setcookie("contact[email]", (string) $_POST['email'], time()+300);
    setcookie("contact[content]", (string) $_POST['contact_content'], time()+300);
  }else{
    // 万が一、POSTメソッドがなかった場合、お問い合わせページに戻る
    echo '不正な操作です。5秒後に、お問い合わせページに戻ります。';
    header('Location: /contact.php', 307);
  }