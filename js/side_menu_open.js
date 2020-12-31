const
  toggle_main_menu = Array.from(document.getElementsByClassName('js-menu-head')),
  toggle_small_menus = Array.from(document.getElementsByClassName('js-toggle_small_menu')),

  main_menus = Array.from(document.getElementsByClassName('js-menu-wrapper')),
  small_menus = Array.from(document.getElementsByClassName('js-menu-content'));

// 始めは閉じた状態にしておく。
main_menus.filter( (menu) =>{
  menu.style.height = '0px';
  menu.style.display = 'none';
});

small_menus.filter( (menu) =>{
  menu.style.height = '0px';
  menu.style.display = 'none';
});


function open_side_menu(menu_box){
  menu_box.style.height = '';
  menu_box.style.display = '';
}

function close_side_menu(menu_box){
  menu_box.style.height = '0px';
  menu_box.style.display = 'none';
}


toggle_main_menu.filter((link)=>{
  link.addEventListener('click', function (){

    const 
      next_box = link.nextElementSibling;

    if(next_box.clientHeight > 0){
      close_side_menu(next_box);
    }else{
      open_side_menu(next_box);
    }

  }, false);
});

toggle_small_menus.filter((link)=>{
  link.addEventListener('click', function (){

    const 
      next_box = link.nextElementSibling;

    if(next_box.clientHeight > 0){
      close_side_menu(next_box);
    }else{
      open_side_menu(next_box);
    }

  }, false);
});
