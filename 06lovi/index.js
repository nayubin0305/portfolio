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

// $(window).scroll(function(){
//     sc=$(window).scrollTop()
//     if(sc <= 400){
//         $("header").css({top:"0"})
//     }else if(he-sc<0){
//         // 내려가는 중
//         $(".header").css({top:"-100%"})
//     }else if(he-sc>0){
//         // 올라가는 중
//         $("header").css({top:"0"})
//     }
//     he=sc
// })

// 커서
$(window).mousemove(function(event){
    _x = event.clientX
    _y = event.clientY
    $(".cursor").css({left:_x, top:_y})
})
$(".menu-li").mouseenter(function(){
$(".cursor").addClass("over")
})
$(".menu-li").mouseleave(function(){
    $(".cursor").removeClass("over")
})
$(".cur-over").mouseenter(function(){
$(".cursor").addClass("over")
})
$(".cur-over").mouseleave(function(){
    $(".cursor").removeClass("over")
})

// 사이트맵
$(".ham-btn").click(function(){
    $(".site-map").css({top:"80px"})
    $(".ham-btn").stop().fadeOut()
    $(".z-btn").stop().fadeIn()
})
$(".x-btn").click(function(){
    $(".site-map").css({top:"-100%"})
    $(".ham-btn").stop().fadeIn()
    $(".z-btn").stop().fadeOut()
})