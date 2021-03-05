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
        <h3 id="web">《チャットアプリ》</h3>
        <div class="section-box">

        <div class="mb20">
          <p class="mb10"><a href="https://chat.app.yk-portfolio012.com/" target="_blank">https://chat.app.yk-portfolio012.com/</a></p>
          <p>※別タブでページが開きます。</p>
        </div>

        <div class="preview-box">
          <div class="preview-img">
            <img src="/img/works/chat_preview.jpg" alt="チャットアプリのプレビュー">
          </div>
          <div class="preview-text">
            <p>制作期間：約１ヶ月</p>
            <p class="mb20">設計の見直し・改修期間：約１ヶ月 （勉強期間を含む）</p>
            <p>合計作業期間：約２ヶ月</p>
            
            <p>PHP + XAMPP（MySQL, Apache）を使い、簡易的なチャットアプリを作りました。</p>
            <p class="mb20">セッション変数を使って、擬似的に入退室のような処理が行われます。</p>

            <p class="mb20">また、禁止ワードの投稿をストップさせる設定や連投対策を実装しています。</p>

            <p><a href="https://github.com/korisu07/PHP-Chat"><b>GitHubのソースコードはこちら</b></a></p>
            <p>（一部、接続情報などのコードは非公開です。）</p>
            
          </div>
        </div> <!-- /.preview-box -->
        </div> <!-- section-box -->
          
      </section>
    </div> <!-- /.content -->

    <?php include './inc/footer.php'; ?>

  </div> <!-- /.container -->

</body>
</html>