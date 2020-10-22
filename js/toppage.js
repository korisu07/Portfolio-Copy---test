
//マウスを乗せたら発動
$('nav a').mouseover(function () {

    //一度フェードアウトさせてdivを消す。リセット用にクラスも消す
    $('div#top-preview').hide().removeClass();
});

//マウスを外したときに発動
$('nav a').mouseout(function () {

    //divを表示しておく
    $('div#top-preview').show();
});

$(function () {

    //  ------------- Top -------------

    //マウスを乗せたら発動
    $('h1 a').mouseover(function () {
        //一度フェードアウトさせてdivを消す。リセット用にクラスも消す
        $('div#top-preview').hide().removeClass();

        //フェードイン処理＋クラス付与して背景が変わる。
        $('div#top-preview').fadeIn(400).addClass('image-first');
    });

    //  ------------- Profile -------------

    //マウスを乗せたら発動
    $('a#profile').mouseover(function () {

        //フェードイン処理＋クラス付与して背景が変わる。
        $('div#top-preview').fadeIn(400).addClass('image-profile');
    });

    //  ------------- Works -------------

    //マウスを乗せたら発動
    $('a#works').mouseover(function () {

        //フェードイン処理＋クラス付与して背景が変わる
        $('div#top-preview').fadeIn(400).addClass('image-works');
    });

    //  ------------- Art -------------

    //マウスを乗せたら発動
    $('a#art').mouseover(function () {

        //フェードイン処理＋クラス付与して背景が変わる
        $('div#top-preview').fadeIn(400).addClass('image-art');
    });

    //  ------------- Contact -------------

    //マウスを乗せたら発動
    $('a#contact').mouseover(function () {

        //フェードイン処理＋クラス付与して背景が変わる
        $('div#top-preview').fadeIn(400).addClass('image-contact');
    });
});
