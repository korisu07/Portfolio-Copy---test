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
    echo '不正な操作です。5秒後に、お問い合わせページに戻ります。';
    header('Location: /contact.php', 307);
  }