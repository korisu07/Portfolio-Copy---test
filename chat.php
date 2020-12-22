<!DOCTYPE html>
<html lang="ja">

  <head>

    <?php include './inc/head.php'; ?>

  </head>

<body id="works-page">

<div id="container">

  <div id="content">

    <?php include './inc/header.php'; ?>

    <section>
      <h2>Works</h2>
      <h3 id="web">《チャットルーム》</h3>
      <div class="section-box">
        <div class="preview-box">
          <div class="preview-img">
            <a href="https://chat.app.yk-portfolio012.com/" target="_blank"><img src="img/works/chat_preview.jpg" alt="チャットルームのプレビュー"></a>
          </div>
          <div class="preview-text">
            <p>制作時間：約１ヶ月<br><br>
            
            PHP + SQLを使い、簡易的なチャットルームを作ってみました。<br>
            セッション変数を使って、擬似的に入退室のような処理が行われます。<br><br>

            また、BOTや荒らし等の対策として、<br>
            リロード回数が多すぎる場合は、サーバー側にIPを記録します。<br>
            <b>（※注意　一定回数のIP記録後、アクセスが不可となってしまいます。試さないでください。）</b><br><br>

            <p><a href="https://github.com/korisu07/PHP-Chat" class="blue-text"><b>GitHubのソースコードはこちら</b></a>
            <br>（一部、対策用のコードは非公開です。）</p>
            
          
          </p>
          </div>
        </div> <!-- /.preview-box -->
      </div> <!-- section-box -->
         
    </section>
  </div> <!-- content -->

  <?php include './inc/footer.php'; ?>
  
</div> <!-- container -->

</body>
</html>