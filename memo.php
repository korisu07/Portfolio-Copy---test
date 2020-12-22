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
      <h3 id="web">《メモくん - Memo.app》</h3>
      <div class="section-box">
        <div class="preview-box">
          <div class="preview-img">
            <a href="https://memo-kun.herokuapp.com/" target="_blank"><img src="img/works/memo_preview.jpg" alt="EC siteのプレビュー"></a>
          </div>
          <div class="preview-text">
            <p>Node.js + Expressを使って制作しました。<br>
            主に、素のJavaScriptの学習を目的として作りました。<br><br>

            Cookieによってメモが保存されます。<br>
            長い文章の場合は、省略して表示されます。「メモを開く」をクリックすると、全文が表示されます。<br><br>
            
            サーバーはherokuを使用しているため、アクセス時に少々時間がかかる場合がございます。</p>
          </div>
        </div> <!-- /.preview-box -->
      </div> <!-- section-box -->
         
    </section>
  </div> <!-- content -->

  <?php include './inc/footer.php'; ?>
  
</div> <!-- container -->

</body>
</html>