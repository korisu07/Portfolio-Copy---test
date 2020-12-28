const 
// 画像切り替え部分を読み込み
	img_preview = document.getElementById('js-top-preview'),
// h1を読み込み
	h1 = document.querySelector('header h1');

// idを読み込む関数
function load_id(id){
	return document.getElementById(id);
};

// 画像切り替えの処理
function thumb_fadeIn_preview(img_url) {

	const
	// 現在の背景画像のURLを取得
		preview_bg = getComputedStyle(img_preview, null).backgroundImage,

	// 一番最後の「/（スラッシュ）」までの文字数をカウント
		index = preview_bg.lastIndexOf('/', preview_bg.length) + 1,

	// パス部分だけを切り出し。出力例：/img/top.png
		check_url = '/img/' + preview_bg.replace(/\"\)/, '').substr(index),
		mouseover_url = img_url;
		

	// 違うリンクに触れた場合のみ、フェードインが発動。
	if(check_url != mouseover_url){
		// 背景画像の切り替え
		img_preview.style.backgroundImage = `url("${img_url}")`;

		// フェードが発動
		img_preview.animate({
			opacity:[0.85, 0]
		}, 200);
	
		img_preview.animate({
			opacity:[0, 0.85]
		}, 500);
	}

}

// h1をマウスオーバー
h1.addEventListener('mouseover', function(){
	thumb_fadeIn_preview('/img/top.png');
});

// profileをマウスオーバー
load_id('profile').addEventListener('mouseover', function(){
	thumb_fadeIn_preview('/img/profile.png');
});

// worksをマウスオーバー
load_id('works').addEventListener('mouseover', function(){
	thumb_fadeIn_preview('/img/works.png');
});

// artをマウスオーバー
load_id('art').addEventListener('mouseover', function(){
	thumb_fadeIn_preview('/img/art.png');
});

// contactをマウスオーバー
load_id('contact').addEventListener('mouseover', function(){
	thumb_fadeIn_preview('/img/contact.png');
});
