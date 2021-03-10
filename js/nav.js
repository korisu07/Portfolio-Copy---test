'use strict';

/////////////////////////////////////////////////
//             ここからクリック処理              //
/////////////////////////////////////////////////

const 
  toggle = document.getElementById('js-toggle-nav'),
  nav = document.querySelector('header nav');

toggle.addEventListener('click', function(){
  // 開くとき
  switch (true){
    // navを開く時
    case toggle.className === 'open-nav':
      // toggleのクラスをリセット
      toggle.className = '';
      // クラスを切り替え
      toggle.className = 'close-nav';
      // navを表示する処理
      toggleOpenNav();

      break;

//////////////////////////////////////////////////////////

    // navを閉じる時
    case toggle.className === 'close-nav':
      // toggleのクラスをリセット
      toggle.className = '';
      // クラスを切り替え
      toggle.className = 'open-nav';
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

/////////////////////////////////////////////////
//                 ここから関数                 //
/////////////////////////////////////////////////

const 
  // bodyタグを読み込み
  body = document.querySelector('body'),
  // nav開閉時にのみ表示される半透明の背景を読み込み
  nav_background = document.getElementById('nav-back'),
  section = document.querySelector('section');

let
  // navメニューのtoggleのスタイルを読み込み
  newToggleMargin = window.getComputedStyle(toggle);
  // margin-rightの数値だけを取得
  newToggleMargin = newToggleMargin.getPropertyValue('margin-right').replace('px', '');
  // もともとついているpadding-rightと、スクロールバーぶんの数値を加算
  newToggleMargin = Number( newToggleMargin ) + numScrollBar;
  /* end const */

// nav要素を表示
function toggleOpenNav(){

  const
  // スクロールしたぶんの数値を取得
  scrollBody = Number( window.pageYOffset );
  /* end const */

  // bodyタグのスタイルを変更し、スクロール位置を固定
  body.style.position = 'fixed';
  // topの位置をスクロール分だけ移動させることで、位置を維持
  body.style.top = -(scrollBody) + 'px';
 
//////////////////////////////////////

  // 半透明の背景を表示
  nav_background.style.display = 'block';
  // フェードインの処理
  opacity_0_to_100(nav_background, 100);
  nav_background.style.opacity = '1';

//////////////////////////////////////

  // nav要素のrightを移動させることで表示する
  nav.style.right = '0';
  //toggleのpaddingRightを変更
  toggle.style.marginRight = newToggleMargin + 'px';

  // 補完用のpadding-rightが設定されていない場合
  // ＝ もともとのページにスクロールがある場合
  if ( main_bg_img.style.paddingRight !== numScrollBar + 'px' ){
    // スクロールバーがなくなった余白を補完するpadding-rightを設定
    section.style.paddingRight = numScrollBar + 'px';
  }
} //end func, toggleOpenNav.


// nav要素を非表示
function toggleCloseNav(){

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

//////////////////////////////////////

  // 半透明の背景をフェードアウト
  opacity_100_to_0(nav_background, 100);
  // 半透明の背景を非表示に
  nav_background.style.opacity = '';
  nav_background.style.display = '';

//////////////////////////////////////

  // nav要素のrightをもとに戻すことで非表示にする
  nav.style.right = '';
  // toggleの補完用padding-rightをリセット
  toggle.style.marginRight = '';

  // 補完用のpaddingがクリックによって設定されている場合
  if( section.style.paddingRight === numScrollBar + 'px' ){
    // padding-rightをリセット
    section.style.paddingRight = '';
  }
} //end func, toggleCloseNav.
