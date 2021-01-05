<?php 
  if( isset($_POST['name']) ){

    // 確認画面にリダイレクト
    header('Location: /contact_confirm.php', 307);

    // それぞれの項目をCookieに登録
    // 有効期限は10分
    setcookie("contact[name]", (string) $_POST['name'], time()+600);
    setcookie("contact[tel]", (string) $_POST['tel'], time()+600);

    // 電話番号が未入力の場合
    if( is_null($_POST['tel']) || $_POST['tel'] === '' ){
      setcookie("contact[tel]", ' ', time()+600);
      }

    setcookie("contact[email]", (string) $_POST['email'], time()+600);
    setcookie("contact[content]", (string) $_POST['contact_content'], time()+600);


  }else{
    // 万が一、POSTメソッドがなかった場合、お問い合わせページに戻る
    echo '不正な操作です。5秒後に、お問い合わせページに戻ります。';
    header('Location: /contact.php', 307);
  }