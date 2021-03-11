//slickライブラリ用の記述
//スライドの設定
$('.slider').slick({
  autoplay:true,      //自動再生
  autoplaySpeed:4000, //自動再生の速度
  dots:true,          //ドットのナビゲーションを表示
  fade:true, //フェードする設定に変更
  speed:2000, //フェードアニメーションの速度
  waitForAnimate:false, //ボタンを押したら強制で切り替わる
  arrows:false, //左右のボタンを消した
});