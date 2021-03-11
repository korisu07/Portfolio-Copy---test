'use strict';

/** グローバルスコープ */
const 
  // body タグ
  body = document.querySelector('body'),

  // ナビゲーション
  nav = document.querySelector('header nav'),
  // ナビゲーションの開閉ボタン
  toggle = document.getElementById('js-toggle-nav'),

  // nav開閉時にのみ表示される半透明の背景
  nav_overlay = document.getElementById('nav-back');
  /* end const */

let 
  // メイン背景が設定されている タグ
  mainBgImg = document.getElementsByClassName('main-bg-img');
  // main-bg-imgタグは１つしかないので、配列の１つ目を取得
  mainBgImg = Array.from( mainBgImg )[0];
  /* end let */


/** ここからクリック時に実行する処理 */

toggle.addEventListener('click', function(){
  const
    scrollBarSize = calcScrollBar(),
    toggleMR = calcToggleMarginR( scrollBarSize );
  // 開くとき
  switch (true){
    // navを開く時
    case this.className === 'open-nav':
      // toggleのクラスをリセット
      this.className = '';
      // クラスを切り替え
      this.className = 'close-nav';
      // navを表示する処理
      toggleOpenNav( scrollBarSize, toggleMR );

      break;

///////////////////////////

    // navを閉じる時
    case this.className === 'close-nav':
      // toggleのクラスをリセット
      this.className = '';
      // クラスを切り替え
      this.className = 'open-nav';
      // navを非表示にする処理
      toggleCloseNav();

      break;

  } //end switch.
}); //end toggle.addEventListener - click.

const
  // ナビゲーションのoverlayを読み込み
  overlay = document.getElementById('nav-back');

//overlayクリック時 ＝ メニューを閉じる時の処理
overlay.addEventListener('click', function(){
  // toggleのクラスをリセット
  toggle.className = '';
  // クラスを切り替え
  toggle.className = 'open-nav';
  // navを非表示にする処理
  toggleCloseNav();

});

/** ここから関数 */

function calcToggleMarginR( scrollBarWidth ){
  let
  // navメニューのtoggleのスタイルを読み込み
  toggleMarginR = window.getComputedStyle( toggle );
  // margin-rightの数値だけを取得
  toggleMarginR = toggleMarginR.getPropertyValue('margin-right').replace('px', '');
  // もともとついているpadding-rightと、スクロールバーぶんの数値を加算
  toggleMarginR = Number( toggleMarginR ) + scrollBarWidth;
  /* end let */

  return toggleMarginR;
} //end func, calcToggleMarginR

///////////////////////////

// nav要素を表示
function toggleOpenNav( scrollBarSize, toggleMarginR ){

  // もともとのページにスクロールがある場合
  if ( scrollBarSize > 0 ){
    // navを固定した関係でスクロールバーが消えてしまうため、
    // スクロールバーがなくなった余白を補完するpadding-rightを設定
    mainBgImg.style.marginRight = scrollBarSize + 'px';
    //toggleのpaddingRightを変更
    toggle.style.marginRight = toggleMarginR + 'px';
  }

/////

  const
  // スクロールしたぶんの数値を取得
  scrolledLength = Number( window.pageYOffset );
  /* end const */

  // bodyタグのスタイルを変更し、スクロール位置を固定
  body.style.position = 'fixed';
  // topの位置をスクロール分だけ移動させることで、位置を維持
  body.style.top = -( scrolledLength ) + 'px';
 
/////

  // 半透明の背景を表示
  nav_overlay.style.display = 'block';
  // フェードインの処理
  opacity_0_to_100(nav_overlay, 100);
  nav_overlay.style.opacity = '1';

/////

  // nav要素のrightを移動させることで表示する
  nav.style.right = '0';

} //end func, toggleOpenNav.


// nav要素を非表示
function toggleCloseNav(){

  // 補完用のpaddingがクリックによって設定されている場合
  if( mainBgImg.style.marginRight ){
    // padding-rightをリセット
    mainBgImg.style.marginRight = '';
  }

  // スクロール固定のためのpositionをリセット
  body.style.position = '';

  let
  // 現在のスクロール位置を、topの値から取得
  // 文字列を取り除く
  bodyTop = body.style.top.replace('px', '');
  bodyTop = bodyTop.replace('-', '');
  // 数値へ変換
  bodyTop = Number(bodyTop);

  // スクロール位置を、もとの位置のまま維持
  scrollTo( 0, bodyTop );
  // topの設定をリセット
  body.style.top = '';

/////

  // 半透明の背景をフェードアウト
  opacity_100_to_0(nav_overlay, 100);
  // 半透明の背景を非表示に
  nav_overlay.style.opacity = '';
  nav_overlay.style.display = '';

/////

  // nav要素のrightをもとに戻すことで非表示にする
  nav.style.right = '';
  // toggleの補完用padding-rightをリセット
  toggle.style.marginRight = '';
} //end func, toggleCloseNav.
