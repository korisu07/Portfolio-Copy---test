<?php

  // お問い合わせの内容を一時的にCookieに保存
  // デフォルトの有効期限は10分
  function set_contanct_cookies($name, $tel, $email, $content, $time = 600){
    setcookie("contact[name]", (string) $name, time()+ $time);
    setcookie("contact[tel]", (string) $tel, time()+ $time);
    setcookie("contact[email]", (string) $email, time()+ $time);
    setcookie("contact[content]", (string) $content, time()+ $time);
  }

  // お問い合わせの一時Cookieを削除する処理
  function clear_contanct_cookies(){
    setcookie("contact[name]", "", time()-600);
    setcookie("contact[tel]", "", time()-600);
    setcookie("contact[email]", "", time()-600);
    setcookie("contact[content]", "", time()-600);
  }

  // お問い合わせの内容を実際にメールで送る処理
  function contact_mail_send($subject, $message){
    mb_language("Japanese");
    mb_internal_encoding("UTF-8");
  
    $to = "portfolio.contact@yk-portfolio012.com";
    $headers = "From: yk-portfolio";
    mb_send_mail($to, $subject, $message, $headers); 
  }