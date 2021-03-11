

///////////////////////////////
/** グローバルスコープ */

// 以下、ドロワーメニューの処理
// 各要素を読み込み
const
  // 画面幅を取得
  window_width = window.innerWidth;
/** end const. */

let
  // nav_drawerを取得
  nav_drawer = document.getElementsByClassName('nav_drawer');
  // nav_drawerを配列化。このクラスは１つしかないので、配列の１つ目を処理
  nav_drawer = Array.from( nav_drawer )[0];

  // nav_back を取得
  nav_back = document.getElementsByClassName('nav_back');
  // navを開いたときに表示される背景は１つしかないので、配列の１つ目を処理
  nav_back = Array.from( nav_back )[0];

  // メニューのtoggleを取得
  menu_toggles = document.getElementsByClassName('nav_toggle');
  // toggleを配列化
  menu_toggles = Array.from( menu_toggles );
/** end let. */

///////////////////////////////
/** ここからクリック時の処理 */

// toggleをクリックした際の処理

menu_toggles.filter((toggle) => {
  toggle.addEventListener('click', function(){

    const
      // クリックされたtoggleのクラス名から、
      // 共通のクラス名である「nav_toggle」を取り除き、取得する。
      toggleClassName = toggle.className.replace('nav_toggle','').replace(' ','');
    /* end const. */

    // クリックされたtoggleのクラス名によって条件を分岐
    switch( toggleClassName ){
    case 'nav_open':
      // navを表示
      nav_drawer.style.right = '0';

      nav_back.style.display = 'block';
      nav_back.style.right = '0';
      // スクロールを無効化
      disableScroll();
      //処理が完了したらラベルの位置に戻る
      break;
    //OFFの場合はメニューを隠す
    case 'nav_close':
      // navを非表示
      nav_drawer.style.right = '';

      nav_back.style.display = '';
      nav_back.style.right = '';
      // スクロールを有効化
      enableScroll();
      //処理が完了したらラベルの位置に戻る
      break;
    }
  }, false);
});

nav_back.addEventListener('click', function(){
  // navを非表示
  nav_drawer.style.right = '';

  nav_back.style.display = '';
  nav_back.style.right = '';
  // スクロールを有効化
  enableScroll();
}, false);


// チェックがONの状態で、ウィンドウサイズに変更があった場合
if(nav_drawer.style.right === '0'){
  switch(window_width < 1000){
    // 変更された場合
    case true:
      // メニュー開閉時の背景と、メニュー上部を隠す処理
      document.querySelector('.nav_back').style.display = 'none';
      document.querySelector('.nav_drawer_top').style.display = 'none';
      break;

    default: 
      break;
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