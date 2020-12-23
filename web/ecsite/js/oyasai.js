
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



// ドロワーメニューの処理

// 各要素を読み込み
const
  menu_checkbox = document.getElementById('nav_action'),
  menu_div = document.getElementsByClassName('nav_drawer'),

  //nav_dramerを配列化。
  //nav_dramerは一つしかないので、配列の１つ目を処理
  nav_drawer = Array.from(menu_div)[0];
  
  // 画面幅を取得
  const window_width = window.innerWidth;

menu_checkbox.addEventListener('change', function(){
  //チェックボックスがONになったら発動
  loopsTop: switch(menu_checkbox.checked){
  case true:
    nav_drawer.style.right = '0';
    //処理が完了したらラベルの位置に戻る
    break loopsTop;
  //OFFの場合はメニューを隠す
  default:
    nav_drawer.style.right = '-100%';
    //処理が完了したらラベルの位置に戻る
    break loopsTop;
  }
}, false);


// チェックがONの状態で、ウィンドウサイズに変更があった場合
if(menu_checkbox.checked){
  topFunction: switch(window_width < 1000){
    case true:
      // メニュー開閉時の背景と、メニュー上部を隠す処理
      document.querySelector('.nav_back').style.display = 'none';
      document.querySelector('.nav_drawer_top').style.display = 'none';
      // 処理が完了したら、ラベルの位置に戻る
      break topFunction;
    default: break topFunction;
  }
}