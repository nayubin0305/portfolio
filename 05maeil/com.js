// 서브메뉴바
$("header .menu").mouseenter(function(){
    sub=$(this).index()
    $("header .sub-ul").stop().slideDown()
    $("header .menu-bg").stop().slideDown()
    $("header").addClass("white")
})
$("header .menu").mouseleave(function(){
    $("header .sub-ul").stop().slideUp()
    $("header .menu-bg").stop().slideUp()
    sub_header()
})

// 중간메뉴바
$(".sub-nav .item2").click(function(){
    $(this).find(".con-ul").stop().slideToggle()
    $(".sub-nav .item2").not(this).find(".con-ul").stop().slideUp()
})

// 사이트맵
var map=0
$(this).find(".sub-ul").stop().slideToggle()
$(".site-map .menu-li").not(this).find(".sub-ul").stop().slideUp()
$(".site-map .img").not($(".site-map .img").eq(map)).stop().fadeOut()
$(".site-map .img").eq(map).stop().fadeIn()

$(".ham-btn").click(function(){
    $("body").toggleClass("site-on")
})
$(".site-map .menu-li").click(function(){
    map=$(this).index()
    $(this).find(".sub-ul").stop().slideToggle()
    $(".site-map .menu-li").not(this).find(".sub-ul").stop().slideUp()
    
    $(".site-map .img").not($(".site-map .img").eq(map)).stop().fadeOut()
    $(".site-map .img").eq(map).stop().fadeIn()
})

// 서브의 헤더
sub_header() //문서시작할때
$(window).scroll(function(){ //스크롤이 움직일때
    sub_header()
})

function sub_header(){
    sc=$(window).scrollTop()
    console.log(sc)
    if(sc>100){
        $("header").addClass("white")
    }else{
        $("header").removeClass("white")
    }
}

// 사이드 메뉴
$(window).scroll(function(){
    win_w   =$(window).width()
    if(win_w>1024){
        $(".side").stop().fadeIn()
    }
})

// 푸터
$(".footer .foo2 .site").click(function(){
    console.log("Aa")
    $(".footer .foo2 .site-ul").stop().fadeToggle()
    $(".footer .foo2 .fa-solid").stop().fadeToggle()
})