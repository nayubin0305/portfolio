// 2026-10-01 스크립트 정리
// 헤더
var lastScroll = 0;

$(window).scroll(function(){
    var currentScroll = $(window).scrollTop();
    
    // 헤더 표시/숨김
    if(currentScroll <= 300){
        $("header").css({top:"0"});
    }else if(currentScroll > lastScroll){
        // 내려가는 중
        $("header").css({top:"-80px"});
    }else {
        // 올라가는 중
        $("header").css({top:"0"});
    }

    lastScroll = currentScroll;
});


// 커서
$(window).mousemove(function(event){
    $(".cursor").css({ left: event.clientX, top: event.clientY });
});

var cursorHoverTargets = ".menu-li, .cur-over";

$(cursorHoverTargets).mouseenter(function(){
    $(".cursor").addClass("over");
});
$(cursorHoverTargets).mouseleave(function(){
    $(".cursor").removeClass("over");
});

// 사이트맵
$("header .ham-btn").click(function(){
    $(this).attr("aria-expanded", "true");
    $(".site-map").css({top:"0px"});
});

$(".site-map .x-btn").click(function(){
    $(".ham-btn").attr("aria-expanded", "false");
    $(".site-map").css({top:"-100%"});
});

// 2026-10-01 디자인 알럿창 추가
$(function() {
    if ($(".alert").length === 0) {
        $("body").append("<div class='alert'></div>");
    }
});

var alertTimer;

function showAlert(message) {
    clearTimeout(alertTimer);
    $(".alert").stop().text(message).addClass("on");

    alertTimer = setTimeout(hideAlert, 1800);
}

function hideAlert() {
    clearTimeout(alertTimer);
    $(".alert").removeClass("on");
}

// 알럿 : 준비중
$(".soon").click(function(e) {
    e.preventDefault();
    showAlert("준비중 입니다.");
});

// 2026-10-01 푸터 form 스크립트 추가
$("form#subscribe").on("submit", function(e) {
    e.preventDefault();
    showAlert("구독요청이 완료되었습니다.");
    this.reset();
});