
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

  //nav_drawerを配列化。
  //nav_drawerは一つしかないので、配列の１つ目を処理
  nav_drawer = Array.from(menu_div)[0];
  
  // 画面幅を取得
  const window_width = window.innerWidth;

menu_checkbox.addEventListener('change', function(){
  //チェックボックスがONになったら発動
  loopsTop: switch(menu_checkbox.checked){
  case true:
    // navを表示
    nav_drawer.style.right = '0';
    // スクロールを無効化
    disableScroll();
    //処理が完了したらラベルの位置に戻る
    break loopsTop;
  //OFFの場合はメニューを隠す
  default:
    // navを非表示
    nav_drawer.style.right = '-100%';
    // スクロールを有効化
    enableScroll();
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

const 
  // スクロールを制御したい範囲を囲んだdivを取得
  divControllScroll = document.getElementById('js-controll-scroll');

function disableScroll(){
  const
  // スクロールしたぶんの数値を取得
  scrollBody = Number( window.pageYOffset );

  // bodyタグのスタイルを変更し、スクロール位置を固定
  divControllScroll.style.position = 'fixed';
  divControllScroll.style.width = '100%';
  // topの位置をスクロール分だけ移動させることで、位置を維持
  divControllScroll.style.top = -(scrollBody) + 'px';

  // スクロールバーが消えた分のpadding-rightを補完
  divControllScroll.style.paddingRight = '17px';
}

function enableScroll(){

  // スクロール固定のためのpositionをリセット
  divControllScroll.style.position = '';

  let
  // 現在のスクロール位置を、topの値から取得
  // 文字列を取り除き、数値だけを取り出す
  divTop = divControllScroll.style.top.replace('px', '');
  divTop = divTop.replace('-', '');
  // 数値へ変換
  divTop = Number( divTop );

  // スクロール位置を、もとの位置のまま維持
  scrollTo( 0, divTop );
  
  // topの設定をリセット
  divControllScroll.style.top = '';
  // スクロールバー補完用のpadding-rightをリセット
  divControllScroll.style.paddingRight = '';
}