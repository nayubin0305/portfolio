// 사이드바
var sc
sc = $(window).scrollTop()
console.log("스크롤"+sc)
if(sc<100){
    $(".sidebar").stop().fadeOut()
}else{
    $(".sidebar").stop().fadeIn()
}
$(window).scroll(function(){
    sc = $(window).scrollTop()
    console.log("스크롤"+sc)
    if(sc<100){
        $(".sidebar").stop().fadeOut()
    }else{
        $(".sidebar").stop().fadeIn()
    }
})

// 헤더
var scroll, head
head = $(window).scrollTop()
scroll=$(window).scrollTop()
    if(scroll <= 400){
        $("header").css({top:"0"})
    }else if(head-scroll < 0){
        // 내려가는 중
        $("header").css({top:"-100%"})
    }else if(head-scroll > 0){
        // 올라가는 중
        $("header").css({top:"0"})
    }
    head = scroll

$(window).scroll(function(){
    scroll=$(window).scrollTop()
    if(scroll <= 400){
        $("header").css({top:"0"})
    }else if(head-scroll < 0){
        // 내려가는 중
        $("header").css({top:"-100%"})
    }else if(head-scroll > 0){
        // 올라가는 중
        $("header").css({top:"0"})
    }
    head = scroll
})

// 헤더 메뉴
$("header .menu-li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown()
    $(this).find(".menu-title").css({color: "#694567"})
})
$("header .menu-li").mouseleave(function(){
    $(this).find(".sub").stop().slideUp()
    $(this).find(".menu-title").css({color: "#000000"})
})

// 헤더 검색창
$("header .search-sub .row1 .btn-x").click(function(){
    $("header .search-sub").stop().slideUp()
    console.log("clisk")
})

// 헤더 로그인
$("header .login>i").click(function(){
    $("header .login-sub").stop().fadeIn()
})
$("header .login-sub .btn-x").click(function(){
    $("header .login-sub").stop().fadeOut()
})
$("header .bg").click(function(){
    $("header .login-sub").stop().fadeOut()
})

$("header .login .mem-on").click(function(){
    $("header .login .no-mem").hide()
    $("header .login .mem").show()
    $("header .login .ch-group").show()
    $("header .login .text").show()
    $("header .login .mem-off h2").css({color: "#444444"})
    $("header .login .mem-on h2").css({color: "#ffffff"})
})
$("header .login .mem-off").click(function(){
    $("header .login .mem").hide()
    $("header .login .ch-group").hide()
    $("header .login .text").hide()
    $("header .login .no-mem").show()
    $("header .login .mem-off h2").css({color: "#ffffff"})
    $("header .login .mem-on h2").css({color: "#444444"})
})




//모바일
$(".mobali-sub-li").click(function(){
    $(".mobali-ul").stop().slideUp()
    $(this).find(".mobali-ul").stop().slideToggle()
})

$("header .ham-btn").click(function(){
    $(".mobali-bg").stop().fadeIn()
    $(".mobali-sub").css({left:"0"})
})
$(".mobali .x-btn").click(function(){
    $(".mobali-bg").stop().fadeOut()
    $(".mobali-sub").css({left:"-100%"})
})
$(".mobali-bg").click(function(){
    $(".mobali-bg").stop().fadeOut()
    $(".mobali-sub").css({left:"-100%"})
})

// 모바일 검색
$("header .fa-magnifying-glass").click(function(){
    var win_w = $(window).width()
    if(win_w < 800){
        $(".mobali-search").css({left:"0"})
    }else{
        $(".mobali-search").css({left:"-100%"})
        $("header .search").find(".search-sub").stop().slideToggle()
    }
})
$(".mobali-search .fa-arrow-left").click(function(){
    $(".mobali-search").css({left:"-100%"})
})

// 모바일 로그인
$(".mobali-sub .btn4").click(function(){
    $(".mobali-login").css({left: "0%"})
})
$(".mobali-login .btn-x").click(function(){
    $(".mobali-login").css({left: "-100%"})
})
$(".mobali-login .mem-on").click(function(){
    $(".mobali-login .no-mem").hide()
    $(".mobali-login .mem").show()
    $(".mobali-login .ch-group").show()
    $(".mobali-login .text").show()
    $(".mobali-login .mem-off h2").css({color: "#999999"})
    $(".mobali-login .mem-on h2").css({color: "#222222"})
})
$(".mobali-login .mem-off").click(function(){
    $(".mobali-login .mem").hide()
    $(".mobali-login .ch-group").hide()
    $(".mobali-login .text").hide()
    $(".mobali-login .no-mem").show()
    $(".mobali-login .mem-off h2").css({color: "#222222"})
    $(".mobali-login .mem-on h2").css({color: "#999999"})
})

// 커서
$(window).mousemove(function(event){
    _x = event.clientX
    _y = event.clientY
    $(".cursor").css({left:_x, top:_y})
})
$(".pick").mouseenter(function(){
$(".cursor").addClass("over")
})
$(".pick").mouseleave(function(){
    $(".cursor").removeClass("over")
})
$(".pick_").mouseenter(function(){
$(".cursor").addClass("over")
})
$(".pick_").mouseleave(function(){
    $(".cursor").removeClass("over")
})