'use strict';

/////////////////////////////////////////////////
//             ここからクリック処理              //
/////////////////////////////////////////////////

const 
toggle = document.getElementById('js-toggle-nav'),
nav = document.querySelector('header nav'),
main_bg_img = document.querySelector('.main-bg-img');

toggle.addEventListener('click', function(){
  // 開くとき
  if(toggle.className === 'open-nav'){
    // クラスをリセット
    toggle.className = '';
    // クラスを切り替え
    toggle.className = 'close-nav';
    // navを表示する処理
    toggleOpenNav();

    // もしも親タグに補完用のpadding-rightが入っていた場合、toggleのスタイルを変更する
    if ( main_bg_img.style.paddingRight = '17px' ) {
      // margin-rightを補正分を引いた30pxに
      toggle.style.marginRight = '30px';
    } //end if.
  } 
  // 閉じる時
  else if(toggle.className === 'close-nav'){
    // クラスをリセット
    toggle.className = '';
    // クラスを切り替え
    toggle.className = 'open-nav';
    // navを非表示にする処理
    toggleCloseNav();
  }
});

/////////////////////////////////////////////////
//                 ここから関数                 //
/////////////////////////////////////////////////

const 
  // bodyタグを読み込み
  body = document.querySelector('body'),
  // nav開閉時にのみ表示される半透明の背景を読み込み
  nav_background = document.getElementById('nav-back');


// nav要素を表示
function toggleOpenNav(){

  const
  // スクロールしたぶんの数値を取得
  scrollBody = Number( window.pageYOffset );

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
} //end func, toggleCloseNav.
