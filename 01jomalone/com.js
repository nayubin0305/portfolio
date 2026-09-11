// 헤더
// 2026-09-09 느린 반응 수정
var lastScroll = 0;

$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();

    // 헤더 표시/숨김
    if (currentScroll <= 100) {
        $("header").removeClass("hide");
    } else if (currentScroll > lastScroll) {
        $("header").addClass("hide");
    } else {
        $("header").removeClass("hide");
    }

    // 탑버튼 / top 클래스
    if (currentScroll < 100) {
        $(".top-btn").stop().fadeOut();
        $("header").addClass("top");
    } else {
        $(".top-btn").stop().fadeIn();
        $("header").removeClass("top");
    }

    lastScroll = currentScroll;
}); 

// 사이트맵
$(".ham-btn").click(function(){
    $("body").toggleClass("site-on");
    $(".site-map .bg").stop().fadeToggle();
});

// 커서
$(window).mousemove(function(event){
    var _x = event.clientX;
    var _y = event.clientY;
    $(".cursor").css({left:_x, top:_y});
});
$(".pick").mouseenter(function(){
    $(".cursor").addClass("over");
});
$(".pick").mouseleave(function(){
    $(".cursor").removeClass("over");
});
$(".pick_").mouseenter(function(){
    $(".cursor").addClass("over");
});
$(".pick_").mouseleave(function(){
    $(".cursor").removeClass("over");
});
$(".ham-btn").mouseenter(function(){
    $(".cursor").addClass("over");
});
$(".ham-btn").mouseleave(function(){
    $(".cursor").removeClass("over");
});

// 2026-09-10 디자인 알럿창 추가
// 2026-09-11 디자인 알럿창 활용도 향상
$(function() {
    if ($(".alert").length === 0) {
        $("body").append("<div class='alert'></div>");
    }
});

var alertTimer;

function showAlert(message) {
    clearTimeout(alertTimer);
    $(".alert").stop().text(message).addClass("on");

    alertTimer = setTimeout(function() {
        $(".alert").removeClass("on");
    }, 1800);
}

// 알럿 : 준비중
$(".soon").click(function(e) {
    e.preventDefault();
    showAlert("준비중 입니다.");
});

// 알럿 : 복사
$(".item .btn-clone").click(function(){
    showAlert("상품 링크가 복사 완료");
});

// 알럿 : 위시리스트
$(".item .btn-heart").click(function(){
    var heart = $(this).parents(".item");

    if (heart.hasClass("on")) {
        heart.removeClass("on");
        showAlert("위시리스트 등록 해제");
    } else {
        heart.addClass("on");
        showAlert("위시리스트 등록");
    }
});