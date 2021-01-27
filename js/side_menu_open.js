const
  toggle_main_menu = Array.from(document.getElementsByClassName('js-menu-head')),
  toggle_small_menus = Array.from(document.getElementsByClassName('js-toggle_small_menu')),

  main_menus = Array.from(document.getElementsByClassName('js-menu-wrapper')),
  small_menus = Array.from(document.getElementsByClassName('js-menu-content'));

// 始めは閉じた状態にしておく。
// 大メニュー
main_menus.filter( (menu_of_main) =>{
  display_to_none(menu_of_main);
});
// 小メニュー
small_menus.filter( (menu_of_sub) =>{
  display_to_none(menu_of_sub);
});


toggle_main_menu.filter((link)=>{
  link.addEventListener('click', function (){

    // 押したリンクの次にある要素を開閉する
    const 
      next_box = link.nextElementSibling;

    if(next_box.clientHeight > 0){
      display_to_none(next_box);
    }else{
      display_to_default(next_box);
    }

  }, false);
});

toggle_small_menus.filter((link)=>{
  link.addEventListener('click', function (){

    // 押したリンクの次にある要素を開閉する
    const 
      next_box = link.nextElementSibling;

    if(next_box.clientHeight > 0){
      display_to_none(next_box);
    }else{
      display_to_default(next_box);
    }

  }, false);
});
