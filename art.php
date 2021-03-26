<!DOCTYPE html>
<html lang="ja">
<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="ポートフォリオ（作品集）です。">
<meta name="keywords" content="Portfolio,ポートフォリオ,Web制作,自主制作,個人制作">

<title>Y.K.Portfolio</title>

<?php include './inc/head.php'; ?>

</head>

<body id="art-page">
  <div class="container main-bg-img">
    <div class="content">

    <?php include './inc/header.php'; ?>

      <section>
        <h2>Art</h2>
        <h3 id="postcard-top">-デジタルイラスト-</h3>
        <div class="section-box thumbnail_sort">
          <div class="select_thumb small_thumb">
            <span>深海</span>
            <a href="ocean.php">
              <img src="img/ocean_thumb.jpg" alt="深海" class="img-thumbnail">
            </a>
          </div>
        </div> <!-- /.section-box .thumbnail_sort --> 

        <h3 id="postcard-top">-手書きイラスト-</h3>
        <div class="section-box thumbnail_sort">
          <div class="select_thumb small_thumb">
            <span>絵はがき</span>
            <a href="art_postcard.php">
              <img src="img/art_postcard_thumb.jpg" class="img-thumbnail">
            </a>
          </div>
        </div> <!-- /.section-box .thumbnail_sort --> 
      </section>

    </div> <!-- /.content -->

    <?php include './inc/footer.php'; ?>

  </div> <!-- /.container -->

</body>
</html>