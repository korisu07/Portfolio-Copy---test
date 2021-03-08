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
  // スクロールバーが存在しない場合に発動
  if(	window.innerWidth == document.documentElement.clientWidth ){
    // bodyタグ内にpadding-rightを補完
    document.querySelector('body').style.paddingRight = '17px';
  } else { // スクロールがある場合
    // bodyタグの余白を削除
    document.querySelector('body').style.paddingRight = '';
  }
}

notExistScroll();
