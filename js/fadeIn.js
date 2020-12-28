const 
  div_content = Array.from( document.getElementsByClassName('content') );

function fadeIn_js(){
	div_content.filter(obj =>{
		obj.animate({
			opacity:[0, 1]
		}, 800);
	})
}

window.onload = fadeIn_js();