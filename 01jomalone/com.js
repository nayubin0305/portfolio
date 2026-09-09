// 헤더
var sc = $(window).scrollTop();
var sc_ing = $(window).scrollTop();
    if(sc<=100){
        $("header").css({top:"0"});
    }else if(sc-sc_ing < 0){
        $("header").css({top:"100%"});
    }else if(sc-sc_ing > 0){
        $("header").css({top:"0"});
    }
    
    sc=sc_ing

if(sc<100){
    $(".top-btn").stop().fadeOut();
    $("header").addClass("top");
}else{
    $(".top-btn").stop().fadeIn();
    $("header").removeClass("top");
}

$(window).scroll(function(){
    sc_ing = $(window).scrollTop();
    if(sc<=100){
        $("header").css({top:"0"});
    }else if(sc-sc_ing < 0){
        $("header").css({top:"-100%"});
    }else if(sc-sc_ing > 0){
        $("header").css({top:"0"});
    }
    sc=sc_ing
});

// 탑버튼
$(window).scroll(function(){
    sc=$(window).scrollTop();
    if(sc<100){
        $(".top-btn").stop().fadeOut();
        $("header").addClass("top");
    }else{
        $(".top-btn").stop().fadeIn();
        $("header").removeClass("top");
    }
});

// 사이트맵
$(".ham-btn").click(function(){
    $("body").toggleClass("site-on");
    $(".site-map .bg").stop().fadeToggle();
});

// 커서
$(window).mousemove(function(event){
    _x = event.clientX
    _y = event.clientY
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
    $(".cursor").removeClass("over")
})
$(".ham-btn").mouseenter(function(){
    $(".cursor").addClass("over");
});
$(".ham-btn").mouseleave(function(){
    $(".cursor").removeClass("over");
});