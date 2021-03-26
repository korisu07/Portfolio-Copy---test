<!DOCTYPE html>
<html lang="ja">
<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="ポートフォリオ「Memo.app ページ」の紹介ページです。">
<meta name="keywords" content="Portfolio,ポートフォリオ,Web制作,自主制作,個人制作">

<title>Works Memo.app - Y.K.Portfolio</title>

<?php include './inc/head.php'; ?>

</head>

<body id="works-page">
  <div class="container main-bg-img">
    <div class="content">

      <?php include './inc/header.php'; ?>

      <section>
        <h2>Works</h2>
        <h3 id="web">《メモくん - Memo.app》</h3>
        <div class="section-box">

        <div class="mb20">
          <p class="mb10">
            <a href="https://memo-kun.herokuapp.com/" target="_blank">https://memo-kun.herokuapp.com/</a>
          </p>
          <p>※外部サイトが開きます。</p>
          <p>※読み込みに時間がかかる場合があります。</p>
        </div>

          <div class="preview-box">
            <div class="preview-img">
              <img src="img/works/memo_preview.jpg" alt="Memo.appのプレビュー">
            </div>
            <div class="preview-text">
              <p>Node.js + Expressを使って制作しました。</p>
              <p class="mb20">主に、素のJavaScriptの学習を目的として作りました。</p>

              <p>Cookieによってメモが保存されます。</p>
              <p class="mb20">長い文章の場合は、省略して表示されます。「メモを開く」をクリックすると、全文が表示されます。</p>
              
              <p>サーバーはherokuを使用しているため、アクセス時に少々時間がかかる場合がございます。</p>
            </div>
          </div> <!-- /.preview-box -->
        </div> <!-- section-box -->
          
      </section>
    </div> <!-- /.content -->

    <?php include './inc/footer.php'; ?>
    
  </div> <!-- /.container -->

</body>
</html>