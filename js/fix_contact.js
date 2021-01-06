'use strict';

// input属性をそれぞれ読み込みして配列化
const 
  cookie_array = document.cookie.split('; ');

// cookie_arrayの出力例：
// ["contact[name]=content", 
//  "contact[email]=content", 
//  "contact[content]=content", 
//  "contact[tel]=0120000000"]


// 連想配列化
const 
  new_cookie_array = cookie_array.map( (cookie)=>{
    let index = cookie.indexOf('contact[') + 8;
    // 配列名と内容をそれぞれ分割
    return cookie.substr(index).split(']=');
  } );

// new_cookie_arrayの出力例：
// Array(4) 
// 0: (2) ["name", "content"]
// 1: (2) ["email", "content"]
// 2: (2) ["content", "content"]
// 3: (2) ["tel", "0120000000"]


// inputタグとtextareaタグを読み込み
const 
  before_input_tags = Array.from( document.querySelectorAll('form input') ),
  textarea_tag = document.querySelector('form textarea');

// inputタグからtype属性がsubmitかbuttonのものを除外
const 
  new_input_tags = before_input_tags.filter(tag => 
    tag.type !== 'submit' && tag.type !== 'button'
  );

// text入力ができるinputタグと、textareaタグを1つの配列にまとめる
const
  tag_array = new_input_tags.concat(textarea_tag);


// タグのname属性と同じCookie名のCookieを参照。
function macth_content(tag_name){
  for(let array_i = 0; array_i < new_cookie_array.length; array_i ++){
    // 配列名がタグのname属性と一致した場合、内容を出力
    if( new_cookie_array[array_i][0].match(tag_name) ){
      // 内容をデコード
      return decodeURIComponent(new_cookie_array[array_i][1]);
    }
  }
}

// inputタグの中身を変更
tag_array.filter( (tag)=>{
  if(macth_content(tag.name) !== undefined){
    // name属性と一致した配列名の内容を反映
    tag.value = macth_content(tag.name);
  }
});