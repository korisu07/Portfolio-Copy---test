<!DOCTYPE html>
<html lang="ja">
<head>
  <?php include './inc/head.php'; ?>
</head>

<body id="works-page">
  <div class="container main-bg-img">
    <div class="content">

      <?php include './inc/header.php'; ?>

      <section>
        <h2>Works</h2>
        <h3 id="web">《チャットルーム》</h3>
        <div class="section-box">

        <div class="mb20">
          <p class="mb10"><a href="https://chat.app.yk-portfolio012.com/" target="_blank">https://chat.app.yk-portfolio012.com/</a></p>
          <p>※別タブでページが開きます。</p>
        </div>

        <div class="preview-box">
          <div class="preview-img">
            <img src="/img/works/chat_preview.jpg" alt="チャットルームのプレビュー">
          </div>
          <div class="preview-text">
            <p class="mb20">制作期間：約１ヶ月</p>
            
            <p>PHP + SQLを使い、簡易的なチャットルームを作ってみました。</p>
            <p class="mb20">セッション変数を使って、擬似的に入退室のような処理が行われます。</p>

            <p >また、BOTや荒らし等の対策もしました。</p>
            <p>禁止ワード設定や、連投対策を実装しています。</p>
            <p class="mb20">F5を連打しすぎると、アクセス制限がかかる仕組みも作っています。</p>

            <p><a href="https://github.com/korisu07/PHP-Chat"><b>GitHubのソースコードはこちら</b></a></p>
            <p>（一部、対策用のコードは非公開です。）</p>
            
          </div>
        </div> <!-- /.preview-box -->
        </div> <!-- section-box -->
          
      </section>
    </div> <!-- /.content -->

    <?php include './inc/footer.php'; ?>

  </div> <!-- /.container -->

</body>
</html>