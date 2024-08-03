$(function () {

  //ページ内スクロール
  const navHeight = 0;

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });



});

function OnLinkClick() {
  $(".works-item1").click(function() {
    // 新しいエリアの作成
    var newArea = $("<div></div>").addClass("dynamic-area").text("新しいエリア");

    // コンテナに新しいエリアを追加
    $(".work-info-area").append(newArea);
  });
}