// 해더 메뉴바
$("header .menu-li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown()
})
$("header .menu-li").mouseleave(function(){
    $(this).find(".sub").stop().slideUp()
})

var last_sc=0
// 문서시작하자마자
spread_y()
history_line()
header_white()
mask_l()
mask_r()
mask_t()
// 스크롤이 움직일 때
$(window).scroll(function(){
    spread_y()
    history_line()
    header_white()
    header_hidden()
    mask_l()
    mask_r()
    mask_t()
    
})
// 히스토리 이미지박스 스크립트
function spread_y(){
    win_h = $(window).height()
    sc = $(window).scrollTop()
    $(".item-img").each(function(inx){
        this_top = $(this).offset().top;
        console.log(this_top)
        if(this_top < sc + win_h - 200){
            $(this).css({clipPath: "inset(0 0 0 0)"})
        }else{
            $(this).css({clipPath: "inset(0 0 100% 0)"})
        }
    })
}
function mask_l(){
    win_h = $(window).height()
    sc = $(window).scrollTop()
    $(".mask-l").each(function(inx){
        this_top = $(this).offset().top;
        if(this_top < sc + win_h - 200){
            $(this).css({clipPath: "inset(0 0 0 0)"})
        }else{
            $(this).css({clipPath: "inset(0 100% 0 0)"})
        }
    })
}
function mask_r(){
    win_h = $(window).height()
    sc = $(window).scrollTop()
    $(".mask-r").each(function(inx){
        this_top = $(this).offset().top;
        if(this_top < sc + win_h - 200){
            $(this).css({clipPath: "inset(0 0 0 0)"})
        }else{
            $(this).css({clipPath: "inset(0 0 0 100%)"})
        }
    })
}
function mask_t(){
    win_h = $(window).height()
    sc = $(window).scrollTop()
    $(".mask-t").each(function(inx){
        this_top = $(this).offset().top;
        if(this_top < sc + win_h - 200){
            $(this).css({clipPath: "inset(0 0 0 0)"})
        }else{
            $(this).css({clipPath: "inset(0 0 100% 0)"})
        }
    })
}

//라인 길이 함수
function history_line(){
    win_h = $(window).height()
    sc = $(window).scrollTop()
    $(".item-img").each(function(inx){
        this_top = $(this).offset().top;
        this_height = $(this).height()+100
        console.log(this_top)
        if(this_top < sc + win_h - 200){
           $(".line .color").height(inx*this_height+100)
        }else{
            
        }
    })
}

//해더 흰배경 클라스 더하기 함수
function header_white(){
    sc = $(window).scrollTop()
    if(sc>100){
        $("header").addClass("black-bg")
    }else{
        $("header").removeClass("black-bg")
    }
}

//해더스크롤 내릴때 스크롤 올릴때 함수
 // last_sc 변수를 먼저 구하고 실핼시킬 것
 last_sc = $(window).scrollTop()
function header_hidden(){
    sc = $(window).scrollTop()
    if(last_sc-sc < 0){ //스크롤을 아래로 움직였을때
        $("header").css({top:-80})
    }else{
        $("header").css({top:0})
    }
    last_sc = sc
}

// 탑버튼
var sc = 0
    if(sc==0){
        $(".top-btn").stop().fadeOut()
        $(".qna-btn").stop().fadeOut()
    }else{
        $(".top-btn").stop().fadeIn()
        $(".qna-btn").stop().fadeIn()
    }

$(window).scroll(function(){
    sc = $(window).scrollTop()
    if(sc==0){
        $(".top-btn").stop().fadeOut()
        $(".qna-btn").stop().fadeOut()
    }else{
        $(".top-btn").stop().fadeIn()
        $(".qna-btn").stop().fadeIn()
    }
 })

//  사이트맵
$(".ham-btn").click(function(){
    $(".ham-btn").toggleClass("active")
    $(".site-map").toggleClass("active")
 })

 $(".site-map .menu-li").click(function(){
    menu_=$(this).index()
    $(".site-map .sub").eq(menu_).stop().slideToggle()
    $(".site-map .sub").not($(".site-map .sub").eq(menu_)).stop().slideUp()
 })

 // 커서
$(window).mousemove(function(event){
    _x = event.clientX
    _y = event.clientY
    $(".cursor").css({left:_x, top:_y})
})
$(".pick_").mouseenter(function(){
$(".cursor").addClass("over")
})
$(".pick_").mouseleave(function(){
    $(".cursor").removeClass("over")
})

$(".pick-b").mouseenter(function(){
$(".cursor").addClass("over")
})
$(".pick-b").mouseleave(function(){
    $(".cursor").removeClass("over")
})

$(".pick-a").mouseenter(function(){
$(".cursor").addClass("over")
})
$(".pick-a").mouseleave(function(){
    $(".cursor").removeClass("over")
})
$("header .menu-li").mouseenter(function(){
$(".cursor").addClass("over")
})
$("header .menu-li").mouseleave(function(){
    $(".cursor").removeClass("over")
})
$(".ham-btn").mouseenter(function(){
$(".cursor").addClass("over")
})
$(".ham-btn").mouseleave(function(){
    $(".cursor").removeClass("over")
})