'use strict';

console.log(document.cookie);

const 
  // input属性をそれぞれ読み込み
  cookie_array = document.cookie.split('; ');
  
let 
  new_array = cookie_array.map( (cookie)=>{
    let index = cookie.indexOf(']=') + 2;
    // cookieの内容をデコードして表示
    return decodeURIComponent(cookie.substr(index));
  } );

  // 連想配列にしたい…
  console.log(new_array[0]);
  console.log(new_array[1]);
  console.log(new_array[2]);
  console.log(new_array[3]);
