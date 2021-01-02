

const 
imgArea = Array.from( document.getElementsByClassName('open_img') ),
divContainer = document.querySelector('.container.main-bg-img');

if(imgArea.length >= 1){
  const 
    add_img_tag = `
      <div id="overlay">
        <img id="modal_img">
      </div>
      `;

  // containerの後ろにタグを追加
  divContainer.insertAdjacentHTML('afterend',add_img_tag);
  
  //画像を表示するdivを取得
  const 
    overlay = document.getElementById("overlay"),
    previewImg = document.getElementById('modal_img');

  // 追加したタグを非表示に
  display_to_none(overlay);

  // 画面サイズが425pxを超えたときに発動
  if(document.documentElement.clientWidth > 425){

    // 画像をクリックした時に、プレビューを表示
    imgArea.forEach((btn) => {
      btn.addEventListener('click', function (open_event){
        open_event.preventDefault();
        img_fade_in(btn, overlay, previewImg);
      });
    }); // end forEach

    overlay.addEventListener('click', function (close_event){
      close_event.preventDefault();

      img_fade_out(overlay);
    })
  } // end if clientWidth > 425px
} // end if imgArea.length >= 1

// 画像をモーダルで表示するための処理
function img_fade_in(toggle, obj_of_overlay, obj_of_img_tag){

  // クリックしたリンクのhref属性を取得
  const 
    imgSrc = toggle.href;

  // imgタグのsrc属性に、取得したhref属性のリンクを付与
  obj_of_img_tag.setAttribute('src', imgSrc);

  display_to_default(obj_of_overlay, 200);
  opacity_0_to_100(obj_of_overlay, 200);

} // end function


// モーダルの画像を非表示にする処理
function img_fade_out(obj_of_overlay){

  opacity_100_to_0(obj_of_overlay, 200);

  // 実際に要素を消す時間をずらす
  // （見た目が不自然になるため）
  setTimeout(function(){
    obj_of_overlay.style.display = 'none';
  }, 150);

} // end function