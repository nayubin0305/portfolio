// 섹션1번의 owl 슬라이더
$(".slider-1").owlCarousel({
    items:1, //보여지는 슬라이더 화면 갯수
    loop:true, //무한으로 돌아갈 건지
    nav:false, //방향버튼
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
})
// 섹션2 슬라이드
var swiper2 = new Swiper(".section2 .item-2 .mySwiper", {
    spaceBetween: 30,
    loop: true,
    slideToClickedSlide: 1,
    breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: ".section2 .item-2 .swiper-button-next",
        prevEl: ".section2 .item-2 .swiper-button-prev",
    },
});


swiper2.on("slideChange",function(){
    active_i=this.realIndex
    console.log("두번째 슬라이드 순번: "+active_i)
    console.log("두번째 클릭한: "+this.clickedIndex)
    console.log("두번째 액티브인덱스: "+this.activeIndex)
    console.log("두번째 리얼: "+this.realIndex)
    section2_left(active_i)
})
function section2_left(active_i){
    $(".section2 .img-box").stop().fadeOut()
    $(".section2 .img-box").eq(active_i).stop().fadeIn()
    $(".section2 .text").stop().fadeOut()
    $(".section2 .text").eq(active_i).stop().fadeIn()
}


// 섹션4번: 아이템에 마우스 올리면 올린 아이 클라스 더하기(active)
// 아이템.제외(올린아이) 클라스 지우기(active)
$(".section4 .item").mouseenter(function(){
    $(this).addClass("active")
    $(".section4 .item").not(this).removeClass("active")
})
$(".section4 .item").mouseleave(function(){
    $(".section4 .item").removeClass("active")
})


var page_num , win_h , win_w , total_num 
page_num  = 0                       //첫페이지 보이게
win_h     = $(window).height()      //화면 높이
win_w     = $(window).width()
total_num = $("section").length - 1 //총 섹션갯수(인덱스를 0으로 만들기)

main()

// 인디를 클릭 했을 때
$(".indi").click(function(){
    page_num = $(this).index()
    main()
})

// 스크롤이 움직였을 때
$(window).scroll(function(){
    sc       = $(window).scrollTop()
    page_num = Math.round(sc/win_h) //소숫점 반올림
    indi()
})

// 이벤트:휠이 움직였을 때
$(window).on("mousewheel",function(event){
    win_h     = $(window).height()   
    win_w     = $(window).width()   
    delta = event.originalEvent.wheelDelta //휠 굴리는 방향값
    ing = $("html,body").is(":animated")   //애니메이션중 :true, 안움직일때 false
    
    /*
    delta<0 : 휠을 아래로 굴릴 때 (-120) , delta>0 : 휠을 위로 굴릴 때 (+120)
    !ing    : 애니메이션이 아닐 때 (움직이지 않을때)
    page_num<tolal_num: page_num이 계속 증가하지 않도록 페이지 수만큼 증가하도록 
    page_num>0        : page_num이 음수가 되지 않도록 
    */

    if(delta<0 && !ing && page_num<total_num && win_w>1024){
        event.preventDefault() //
        page_num++
        main()
    }else if(delta>0 && !ing && page_num>0 && win_w>1024){
        event.preventDefault()
        page_num--
        main()
    }
})

$("html, body, .main").on("mousewheel",function(event){
    win_w   =$(window).width()
    if(win_w>1024){
        event.preventDefault() //이벤트를 없애다
    }
})

// 스크롤탑 애니메이션
function main(){
    console.log(page_num)
    if(page_num==total_num){
        $("html,body").stop().animate({scrollTop:(total_num-1)*win_h+240},1000,header)
    }else {
        $("html,body").stop().animate({scrollTop: page_num * win_h}, 1000, header)
    }
}

// 인디케이트 함수
function indi(){
    $(".indi").removeClass("active")
    $(".indi").eq(page_num).addClass("active")
}

// 서브메뉴바
$("header .menu").mouseenter(function(){
    $("header .sub-ul").stop().slideDown()
    $("header .menu-bg").stop().slideDown()
    $("header").removeClass("white black")
    $("header").addClass("white")
})
$("header .menu").mouseleave(function(){
    $("header .sub-ul").stop().slideUp()
    $("header .menu-bg").stop().slideUp()
    header()
})
// 헤더 함수
function header(){
    $("header").removeClass("white")
    $("header").removeClass("black")
    if(page_num==0){
        // 투명
        $(".arrows").stop().fadeIn()
        $(".indi").removeClass("color")
    }else if(page_num==1){
        $("header").addClass("white")
        $(".indi").removeClass("color")
    }else if(page_num==2){
        // 투명
        $(".indi").removeClass("color")
    }else if(page_num==3){
        $("header").addClass("white")
        $(".indi").addClass("color")
    }else if(page_num==4){
        // 투명
        $(".arrows").stop().fadeOut()
        $(".indi").removeClass("color")
    }
}



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

// 퀵 메뉴
$(window).scroll(function(){
    win_w   =$(window).width()
    if(win_w>1024){
        $(".side").stop().fadeIn()
    }
})

// 푸터
$(".footer .foo2 .site").click(function(){
    $(".footer .foo2 .site-ul").stop().fadeToggle()
    $(".footer .foo2 .fa-solid").stop().fadeToggle()
})
