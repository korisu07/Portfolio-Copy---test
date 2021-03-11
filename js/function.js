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

///////////////////////////

// スクロールバーの幅を計算する
function calcScrollBar(){
  const 
  // ユーザーのアクセスしている端末がスマホかどうかを取得する
    agent = window.navigator.userAgent.toLowerCase();
  
  // スマホやモバイルからのアクセスの場合
  if(agent.indexOf('iphone') > -1 || 
    agent.indexOf('ipod') > -1 || 
    agent.indexOf('android') > -1 || 
    agent.indexOf('mobile') > -1) {

  // スクロールバーの横幅の補正を0と設定する
  return 0;

  }else{
  // PCからのアクセスの場合、スクロールバーの横幅の値を計算する
  let
    // スクロールバーを含む表示域 - 含まない表示域
    calcWidth = Number( window.innerWidth ) - Number( document.body.clientWidth );
    // 計算結果を四捨五入する
    calcWidth = Math.round( calcWidth );

  // 計算した値をスクロールバーの横幅として設定する
  return calcWidth;

  } //end if, mobile.
} //end func, checkScrollSize.

///////////////////////////