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


// スクロールバーがない場合、スクロールバーぶんの横幅を補完
function notExistScroll(){
  // bodyタグを読み込み
  const body = document.querySelector('.main-bg-img');

  // スクロールバーが存在しない場合に発動
  if(	window.innerWidth == document.body.clientWidth ){
    // bodyタグ内にpadding-rightを補完
    body.style.paddingRight = '17px';
  }
  // スクロールがあり、セットされていた場合
  else if ( body.style.paddingRight = '17px' ) {
    // bodyタグの余白を削除
    body.style.paddingRight = '';
  } //end if.
}

// 画面幅が768pxよりも上の場合に、発動
if( document.body.clientWidth > 768){
  // スクロールバー分の横幅を補完
  notExistScroll();
} //end if.