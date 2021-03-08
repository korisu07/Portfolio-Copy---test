<footer>
  <?php 
    $space_str = '&nbsp;';
    // footerを表示
    // 出力例：2019 - 2021  Y.K.Portfolio.
    echo 
      '2019',
      "${space_str}-${space_str}",
      date('Y'), //自動で今年の西暦を表示
      "${space_str}${space_str}",
      'Y.K.Portfolio.';

    ?>
</footer>

<script src="/js/function.js"></script>

<script src="/js/fadeIn.js"></script>

<script src="/js/side_menu_open.js"></script>
<script src="/js/modal_img.js"></script>