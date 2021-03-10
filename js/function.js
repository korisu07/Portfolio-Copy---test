// フェードインパターン１
function opacity_0_to_100(fade_box, delay_Time = 600){
  fade_box.animate({
    opacity:[0, 1]
  }, delay_Time);
}

// フェードアウトパターン１
function opacity_100_to_0(fade_box, delay_Time = 600){
  fade_box.animate({
    opacity:[1, 0]
  }, delay_Time);
}

// フェードインパターン２
function opacity_0_to_40(fade_box, delay_Time = 200){
  fade_box.animate({
    opacity:[0, 0.4]
  }, delay_Time);
}

// フェードアウトパターン２
function opacity_40_to_0(fade_box, delay_Time = 200){
  fade_box.animate({
    opacity:[0.4, 0]
  }, delay_Time);
}


// 要素の表示を操作
// heightとdisplayを元の状態に戻す
function display_to_default(display_box){
  display_box.style.height = '';
  display_box.style.display = '';
}

// heightを0pxに、displayをnoneに
function display_to_none(display_box){
  display_box.style.height = '0px';
  display_box.style.display = 'none';
}

////////////////////////////////////////////

// スクロールバーを含む画面幅と、スクロールバーを含まない画面幅を比べて、
// スクロールが発生しているかをチェックする関数
// trueならスクロールあり 
function boolExistScrollBar(){
  if( window.innerWidth !== document.body.clientWidth ){
    // スクロールありと判定
    return true;
  } else {
    // スクロールなしと判定
    return false;
  }
} //end func boolExistScrollBar.

////////////////////////////////////////////
// 以下、関数を発動させるゾーン

// 背景を設定しているタグを読み込み
const
  main_bg_img = document.querySelector('.main-bg-img'),
  // スクロールバーの幅
  // 後々、Chrome以外にも対応するかもしれないのでここで定義
  numScrollBar = 17;

// スクロールバーがない場合、スクロールバーぶんの横幅を補完
function setPaddingRight( bool ){
  // switch
  loopsTop: switch ( bool ){
    // スクロールがありの場合
    case true:
      // 背景設定タグ内にpadding-rightを補完
      main_bg_img.style.paddingRight = numScrollBar;
      //処理が完了したらラベルの位置に戻る
      break loopsTop;

    // スクロールがなしの場合
    case false:
      // padding-rigthが動的に入っている場合
      if( main_bg_img.style.paddingRight = numScrollBar ){
        // 背景設定タグの余白を削除
        main_bg_img.style.paddingRight = '';
      }

      //処理が完了したらラベルの位置に戻る
      break loopsTop;

  } //end switch.
}

// 画面幅が768pxよりも上の場合に、発動
if( document.body.clientWidth > 768){
  // スクロールバー分の横幅を補完
  setPaddingRight( boolExistScrollBar() );
} //end if.


