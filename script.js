// ハンバーガーメニュー
const ham = $('#js-hamburger');
const nav = $('#js-nav');

$(function () {
    $('#js-hamburger, .navigation__link').on('click', function () {
        ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
        nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
    });
});

// ページ内スクロール
$('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
});
