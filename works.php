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

<body id="works-page">
  <div class="container main-bg-img">
    <div class="content">

      <?php include './inc/header.php'; ?>

      <section>

        <h2>Works</h2>

        <h3 id="web-app-top">-APP-</h3>
        <div class="section-box thumbnail_sort">
          <div class="select_thumb small_thumb">
            <span>チャット</span>
            <a href="chat.php"><img src="img/chat_app.jpg" alt="EC site" class="img-thumbnail"></a>
          </div>

          <div class="select_thumb small_thumb">
            <span>Memo.app</span>
            <a href="memo.php"><img src="img/memo_app.jpg" alt="Cafe" class="img-thumbnail"></a>
          </div>

        </div> <!-- /.section-box .thumbnail_sort --> 

        <h3 id="web-page-top">-WEB-</h3>
        <div class="section-box thumbnail_sort">
          <div class="select_thumb small_thumb">
            <span>おやさい.net</span>
            <a href="oyasai.php"><img src="img/ecsite.jpg" alt="EC site" class="img-thumbnail"></a>
          </div>

          <div class="select_thumb small_thumb">
            <span>Cafe*Cookies</span>
            <a href="cafe-cookies.php"><img src="img/cafe-site.jpg" alt="Cafe" class="img-thumbnail"></a>
          </div>

        </div> <!-- /.section-box .thumbnail_sort --> 

        <h3 id="dtp-top">-DTP-</h3>

        <div class="section-box thumbnail_sort">

            <div class="select_thumb medium_thumb">
              <span>熊よけ鈴 チラシ</span>
              <a href="kumayoke.php">
                <img src="img/kumayoke_thumb.jpg" alt="EC site" class="img-thumbnail">
              </a>
            </div>

          <div class="select_thumb medium_thumb">
            <span>暑中見舞い ハガキ</span>
            <a href="work_postcard.php">
              <img src="img/syotyu-mimai_thumb.jpg" alt="EC site" class="img-thumbnail">
            </a>
          </div>

        </div><!-- /.section-box .thumbnail_sort --> 

      </section>

    </div> <!-- /.content -->

    <?php include './inc/footer.php'; ?>
    
  </div> <!-- /.container -->

</body>
</html>