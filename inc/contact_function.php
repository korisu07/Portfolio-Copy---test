<?php

  // お問い合わせの内容を一時的にCookieに保存
  // デフォルトの有効期限は10分
  function set_contanct_cookies($name, $company ,$tel, $email, $content, $time = 600){
    setcookie("contact[name]", (string) $name, time()+ $time);
    setcookie("contact[company]", (string) $company, time()+ $time);
    setcookie("contact[tel]", (string) $tel, time()+ $time);
    setcookie("contact[email]", (string) $email, time()+ $time);
    setcookie("contact[content]", (string) $content, time()+ $time);
  }

  // お問い合わせの一時Cookieを削除する処理
  function clear_contanct_cookies(){
    setcookie("contact[name]", "", time()-600);
    setcookie("contact[company]", "", time()-600);
    setcookie("contact[tel]", "", time()-600);
    setcookie("contact[email]", "", time()-600);
    setcookie("contact[content]", "", time()-600);
  }

  // お問い合わせの内容を実際にメールで送る処理
  function contact_mail_send($send_name, $send_company, $send_tell, $send_email, $send_message){

    include dirname(__FILE__) . '/hide_mail_send_func.php';

    mb_language("Japanese");
    mb_internal_encoding("UTF-8");

    if( !isset($send_company) || $send_company === '' ){
      $send_company = '未入力';
    }

    if( !isset($send_tell) || $send_tell === ''){
      $send_tell = '未入力';
    }

    $subject = 'Y.K.Portfolioへのお問い合わせが届きました。';

    $message =  '■送信者：' . $send_name . PHP_EOL . PHP_EOL;
    $message .= '■会社名：' . $send_company . PHP_EOL . PHP_EOL;
    $message .= '■電話番号：' . $send_tell . PHP_EOL . PHP_EOL;
    $message .= '■メールアドレス：' . PHP_EOL . '　' . $send_email . PHP_EOL . PHP_EOL;
    $message .= '■お問い合わせ内容：' . PHP_EOL . PHP_EOL . $send_message . PHP_EOL;

    $headers = 'From: Y.K.Portfolio';

    mb_send_mail($server_email, $subject, $message, $headers); 
  }