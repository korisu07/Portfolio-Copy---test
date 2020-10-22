const 
imgArea = document.querySelectorAll('#open_img'),
divContainer = document.getElementById('container');

const 
tag = `
  <div id="overlay"></div>
  <img id="modal_img">
  `;

divContainer.insertAdjacentHTML ('afterend',tag);

//画像を表示するdivを取得
const 
overlay = document.getElementById("overlay"),
previewImg = document.getElementById('modal_img');

if(document.documentElement.clientWidth > 425){

  imgArea.forEach(function(btn){
    btn.addEventListener('click', function (event){
      event.preventDefault();
    
      const imgSrc = btn.href;
    
      previewImg.setAttribute('src', imgSrc);
    
      overlay.style.display = 'block';
      previewImg.style.display = 'inline-block';
    
      overlay.animate({
        opacity:[0, 0.4]
      }, 200);
      previewImg.animate({
        opacity:[0, 0.4]
      }, 200);
    
    });
  })
  
  overlay.addEventListener('click', function (){
  
    overlay.animate({
      opacity:[0.4, 0]
    }, 200);
    previewImg.animate({
      opacity:[0.4, 0]
  
  }, 200);
  
  setTimeout(function(){
    overlay.style.display = 'none';
    previewImg.style.display = 'none';
  }, 150);
  });
  

}

