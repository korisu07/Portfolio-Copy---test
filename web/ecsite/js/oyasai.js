///////////////////////////////
      /** JSを読み込み */
///////////////////////////////

// JSファイルを動的に読み込む処理
function readJSfile( filepath ){
  document.write(`<script src=\"${filepath}\"></script>`);
}

/** 
 * 配列の中に読み込みたいJSファイルを追加してください。
 * 指定するパスは、ルートを基準とした絶対パスか、
 * おやさい.netのindex.htmlを基準とした相対パスであれば読み込みが可能です。
 */

const JS_files = [
  // 絶対パス
  '/js/function.js',
  '/web/ecsite/js/jquery-3.4.1.min.js',
  '/web/ecsite/slick/slick.min.js',
  '/web/ecsite/js/slider.js',
  '/web/ecsite/js/nav.js'
];

JS_files.forEach((file) => {
  readJSfile( file );
});