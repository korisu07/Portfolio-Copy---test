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


// ブラウザごとに、スクロールバーの幅を返す
function checkScrollSize(){
  const 
    agent = window.navigator.userAgent.toLowerCase();
  
  // スマホやモバイルからのアクセスの場合
  if(agent.indexOf('iphone') > -1 || 
    agent.indexOf('ipod') > -1 || 
    agent.indexOf('android') > -1 || 
    agent.indexOf('mobile') > -1) {
    // スクロールバーの横幅の補正を0と設定する
    return 0;
  }else{
  // PCからのアクセスの場合、ブラウザを判定し、それぞれスクロールバーの横幅の値を設定する
    switch (true){
      // Chrome の場合
      case agent.indexOf('chrome') > -1:
        return 17;
      // Safari の場合
      case agent.indexOf('safari') > -1:
        return 17;
      // IE の場合
      case agent.indexOf('msie') > -1:
        return 17;
      // Edge の場合
      case agent.indexOf('edge') > -1:
        return 17;
      // Firefox の場合
      case agent.indexOf('firefox') > -1:
        return 16;
      // その他のブラウザの場合…
      default:
        return 0;
    } //end switch,accese agent.
  } //end if, mobile.
} //end func, checkScrollSize.

////////////////////////////////////////////


// 背景を設定しているタグを読み込み
const
  main_bg_img = document.querySelector('.main-bg-img'),

  // スクロールバーの幅
  numScrollBar = checkScrollSize();

////////////////////////////////////////////

// スクロールが発生しているかをチェックする関数
// trueならスクロールあり 
function boolExistScrollBar(){
  // ファイル名を取得
  const
    filename = window.location.href.split('/').pop();

// スクロールバーを含む表示域と、含まない表示域を比較して
// スクロールが発生しているかをチェック
  if( window.innerWidth === document.body.clientWidth ){
    // スクロールありと判定
    return false;
  } // contact.phpにアクセスしており、かつブラウザ縦幅が916px以下である場合
  else if( filename === 'contact.php' && window.innerHeight <= 916 ){
    // スクロールありと判定
    return true;
  } // contact.phpにアクセスしており、かつブラウザ縦幅が916pxより上である場合
  else if( filename === 'contact.php' && window.innerHeight > 916 ){
    // スクロールありと判定
    return false;
  }
   // その他、スクロールが発生する場合
  else {
    // スクロールありと判定
    return true;
  } //end if, Exist scroll bar
} //end func boolExistScrollBar.

////////////////////////////////////////////
// 以下、関数を発動させるゾーン

// スクロールバーがない場合、スクロールバーぶんの横幅を補完
function setPaddingRight(){

  // switch
  switch ( boolExistScrollBar() === false ){
    // スクロールがなしの場合
    case false:
      // 背景設定タグ内にpadding-rightを補完
      main_bg_img.style.paddingRight = numScrollBar + 'px';
      //処理が完了したらラベルの位置に戻る
      break;

    // スクロールがありの場合
    case true:
      // padding-rigthが動的に入っている場合
      if( main_bg_img.style.paddingRight = numScrollBar ){
        // 背景設定タグの余白を削除
        main_bg_img.style.paddingRight = '';
      }
      break;

    default:
      break;


  } //end switch.
}

const
bool = boolExistScrollBar();
// 画面幅が1000以下で、かつ768pxよりも上の場合に、発動
if( document.body.clientWidth > 768 ){
  // スクロールバー分の横幅を補完
  setPaddingRight( bool );
} //end if.
