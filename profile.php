<!DOCTYPE html>
<html lang="ja">

<?php include 'head.php'; ?>

<body id="profile-page">

<div id="container">

  <div id="content">

  <?php include 'header.php'; ?>
      
    <section>
      <h2>Profile</h2>

      <h3>小林 夢奈</h3>

      <dl class="dl-block">
        <dt>自己紹介</dt>
        <dd>WEB制作をしながら過ごしています。<br>約4年間続けた接客業を辞め、IT業界への転職をしました。<br><br>
          いずれはコードを書くだけでは収まらず、様々な人と関わっていける<br>
          エンジニアになりたいと考えています。</dd>
      </dl>

      <dl class="dl-block">
        <dt>GitHubアカウント</dt>
        <dd>
          <a href="https://github.com/korisu07/" target="_blank" class="blue-text">
            <b>https://github.com/korisu07/</b>
          </a>
        </dd>
      </dl>

      <dl class="dl-block skill">
        <dt>スキル一覧</dt>
        <dd class="star-wrapper">
            <span class="skill-star">★★★…よく使う</span>
            <span class="skill-star">★★☆…基礎はOK</span>
            <span class="skill-star">★☆☆…勉強中</span>　
        </dd>
        <dd class="dd-content">
            ・Photoshop<span class="dd-span">★★★</span><br>
            実務経験があります。主にバナー画像やスライド画像の制作で使用していました。
        </dd>
        <dd class="dd-content">
            ・Illustrator
            <span class="dd-span">★★☆</span><br>
            実務経験があり、aiファイルの素材を扱えます。
        </dd>
        <dd class="dd-content">
            ・HTML5・CSS3<span class="dd-span">★★★</span><br>
            実務経験あり。CSSアニメーションも、ある程度は扱えます。
        </dd>
        <dd class="dd-content">
            ・JavaScript<span class="dd-span">★★☆</span><br>
            勉強中。時間はかかるかもしれませんが、基本的な記述はできます。<br>
            主に、素のJavaScriptとNode.jsを勉強中です。<br>
        </dd>
        <dd class="dd-content">
          ・PHP & SQL<span class="dd-span">★☆☆</span><br>
          こちらも勉強中です。聞きながら、あるいは調べながらであれば、ある程度は記述することができます。<br>
        </dd>
      </dl> <!-- dl-block -->

      <dl class="dl-block">
        <dt>趣味</dt>
        <dd>絵を描くことと、音楽をつくること。ゲームをすること。</dd>
      </dl> <!-- dl-block -->
    
      <dl class="dl-block">
        <dt>好きな食べ物</dt>
        <dd>チーズとじゃがいも。延々と食べたい。</dd>
      </dl> <!-- dl-block -->
    </section>

    </div> <!-- content -->

    <?php include 'footer.php'; ?>
    
</div> <!-- container -->

</body>
</html>