// 헤더 메뉴바
$("header .menu-li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown();
});
$("header .menu-li").mouseleave(function(){
    $(this).find(".sub").stop().slideUp();
});

// 2026-09-10 중복 스크립트 정리
var lastScroll = $(window).scrollTop();

// 클립패스 마스크 함수
var maskConfig = {
    ".item-img": "inset(0 0 100% 0)",
    ".mask-l": "inset(0 100% 0 0)",
    ".mask-r": "inset(0 0 0 100%)",
    ".mask-t": "inset(0 0 100% 0)"
};

function checkMasks(){
    var winH = $(window).height();
    var sc = $(window).scrollTop();

    $.each(maskConfig, function(selector, closedValue){
        $(selector).each(function(){
            var itemTop = $(this).offset().top;
            if(itemTop < sc + winH - 200){
                $(this).css({ clipPath: "inset(0 0 0 0)" });
            } else {
                $(this).css({ clipPath: closedValue });
            }
        });
    });
}

//히스토리 라인 길이 함수
function historyLine(){
    var win_h = $(window).height();
    var sc = $(window).scrollTop();

    $(".item-img").each(function(inx){
        var this_top = $(this).offset().top;
        var this_height = $(this).height()+100;
        if(this_top < sc + win_h - 200){
           $(".line .color").height(inx * this_height + 100);
        }
    });
}

//해더 보임/숨김
function headerState(){
    var sc = $(window).scrollTop();

    $("header").toggleClass("black-bg", sc > 100);

    if(lastScroll - sc < 0){
        $("header").css({ transform: "translateY(-100%)" });
    } else {
        $("header").css({ transform: "translateY(0)" });
    }
    lastScroll = sc;
}

// 탑버튼
function toggleFloatingButtons(){
    var sc = $(window).scrollTop();
    var $buttons = $(".top-btn, .qna-btn");
    if(sc === 0){
        $buttons.stop().fadeOut();
    } else {
        $buttons.stop().fadeIn();
    }
}

function onScroll(){
    checkMasks();
    historyLine();
    headerState();
    toggleFloatingButtons();
}

// 초기 실행
onScroll();

$(window).scroll(onScroll);

//  사이트맵
$(".ham-btn").click(function(){
    var isOpen = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", !isOpen);

    $(".ham-btn").toggleClass("active");
    $(".site-map").toggleClass("active");
});

 $(".site-map .menu-li").click(function(){
    var idx = $(this).index();
    $(".site-map .sub").eq(idx).stop().slideToggle();
    $(".site-map .sub").not($(".site-map .sub").eq(idx)).stop().slideUp();
});

// 커서
$(window).mousemove(function(event){
    $(".cursor").css({ left: event.clientX, top: event.clientY });
});

var cursorHoverTargets = ".pick_, .pick-a, .pick-b, header .menu-li, .ham-btn";

$(cursorHoverTargets).mouseenter(function(){
    $(".cursor").addClass("over");
});
$(cursorHoverTargets).mouseleave(function(){
    $(".cursor").removeClass("over");
});

// 2026-09-10 디자인 알럿창 추가
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