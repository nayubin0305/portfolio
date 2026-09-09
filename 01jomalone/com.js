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