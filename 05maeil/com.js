// 2026-09-28 스크립트 정리
// 메인 헤더 메뉴
$("header .menu").mouseenter(function(){
    $("header .sub-ul").stop().slideDown();
    $("header .menu-bg").stop().slideDown();
    $("header").addClass("white");
});

$("header .menu").mouseleave(function(){
    $("header .sub-ul").stop().slideUp();
    $("header .menu-bg").stop().slideUp();
    
    if (typeof header === "function") {
        header();      
    } else {
        sub_header();  
    }
});

// 중간메뉴바
$(".sub-nav .item2 .mini").click(function(){
    var $con = $(this).next(".con");
    var isOpen = $(this).attr("aria-expanded") === "true";

    $(".sub-nav .item2 .mini").not($(this)).attr("aria-expanded", "false");
    $(".sub-nav .item2 .con").not($con).stop().slideUp(100);

    $con.stop().slideToggle(200);
    $(this).attr("aria-expanded", !isOpen);
});

$(".sub-nav .item2 .con-li").click(function(){
    $(".sub-nav .item2 .mini").attr("aria-expanded", "false");
    $(".sub-nav .item2 .con").hide();
});

// 사이트맵
var map = 0;

$(".ham-btn").click(function(){
    var isOpen = $("body").toggleClass("site-on").hasClass("site-on");
    $(this).attr("aria-expanded", isOpen);

    $(".site-map .menu-li").removeClass("active");
    $(".site-map .menu-li .sub-ul").hide();
    $(".site-map .img").not($(".site-map .img").eq(0)).stop().fadeOut();
    $(".site-map .img").hide().eq(0).stop().fadeIn();
});

$(".site-map .menu-li").click(function(){
    map = $(this).index();

    $(".site-map .menu-li").not($(this)).removeClass("active");
    $(this).toggleClass("active");
    $(".site-map .menu-li").not(this).find(".sub-ul").hide();
    $(this).find(".sub-ul").stop().slideToggle();
    $(".site-map .img").not($(".site-map .img").eq(map)).stop().fadeOut();
    $(".site-map .img").eq(map).stop().fadeIn();
});

// 서브의 헤더
sub_header();

$(window).scroll(function(){
    sub_header();
});

function sub_header(){
    var sc = $(window).scrollTop();

    if(sc > 100){
        $("header").addClass("white");
    }else{
        $("header").removeClass("white");
    }
}

// 사이드 메뉴
function toggleSide(){
    var win_w = $(window).width();
    if(win_w > 1024){
        $(".side").stop().fadeIn();
    } else {
        $(".side").stop().fadeOut();
    }
}

toggleSide();               
$(window).on("resize", toggleSide);

// 푸터
$(".footer .foo2 .site").click(function(){
    var isOpen = $(this).attr("aria-expanded") === "true";

    $(".footer .foo2 .site-ul").stop().fadeToggle();
    $(".footer .foo2 .fa-solid").stop().fadeToggle();
    $(this).attr("aria-expanded", !isOpen);
});

// 2026-09-28 커서
$(window).mousemove(function(event){
    $(".cursor").css({ left: event.clientX, top: event.clientY });
});

var cursorHoverTargets = ".pick, .pick_";

$(cursorHoverTargets).mouseenter(function(){
    $(".cursor").addClass("over");
});
$(cursorHoverTargets).mouseleave(function(){
    $(".cursor").removeClass("over");
});

// 2026-09-28 디자인 알럿창 추가
$(function() {
    if ($(".alert").length === 0) {
        $("body").append("<div class='alert'><div class='alert-box'><span class='alert-text'></span></div><button type='button' class='alert-close'>확인</button></div>");
    }

    $(".alert .alert-close").on("click", hideAlert);
});

var alertTimer;

function showAlert(message) {
    clearTimeout(alertTimer);
    $(".alert .alert-text").stop().text(message);
    $(".alert").stop().addClass("on");

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

// 드롭박스 닫기
$(document).click(function(event){
    var $target = $(event.target);

     if(!$target.closest(".sub-nav").length){
        $(".sub-nav .item2 .mini").attr("aria-expanded", "false");
        $(".sub-nav .item2 .con").stop().slideUp(100);
    }

    if(!$target.closest(".footer .foo2").length){
        $(".footer .foo2 .site-ul").stop().hide();
        $(".footer .foo2 .down").stop().show();
        $(".footer .foo2 .up").stop().hide();
        $(".footer .foo2 .site").attr("aria-expanded", "false");
    }
});