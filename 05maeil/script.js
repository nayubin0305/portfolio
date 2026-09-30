// 2026-09-28 스크립트 정리
// 섹션1번의 owl 슬라이더
$(".slider-1").owlCarousel({
    items:1, //보여지는 슬라이더 화면 갯수
    loop:true, //무한으로 돌아갈 건지
    nav:false, //방향버튼
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
});

// 섹션2 스와이퍼 슬라이드
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
    var active_i = this.realIndex;
    section2_left(active_i);
})

function section2_left(active_i){
    $(".section2 .img-box").stop().fadeOut();
    $(".section2 .img-box").eq(active_i).stop().fadeIn();
    $(".section2 .text").stop().fadeOut();
    $(".section2 .text").eq(active_i).stop().fadeIn();
}

// 섹션4번 (active)
$(".section4 .item").mouseenter(function(){
    $(this).addClass("active");
    $(".section4 .item").not(this).removeClass("active");
});
$(".section4 .item").mouseleave(function(){
    $(".section4 .item").removeClass("active");
});

// 전체 휠 이벤트
var page_num = 0; //첫페이지
var win_h = $(window).height();
var win_w = $(window).width();
var total_num = $(".section").length - 1; //총 섹션갯수(인덱스를 0으로 만들기)

main();

// 인디를 클릭 했을 때
$(".indi").click(function(){
    page_num = $(this).index();
    main();
});

// 스크롤이 움직였을 때
$(window).scroll(function(){
    if($("html,body").is(":animated")) return;
    
    var sc = $(window).scrollTop();
    var new_page_num = Math.round(sc/win_h)

    if(new_page_num !== page_num){   
        page_num = new_page_num;
        indi();
    }
});

// 이벤트:휠이 움직였을 때
$(window).on("wheel",function(event){
    win_h = $(window).height();
    win_w = $(window).width();   
    if(win_w <= 1024) return;

    var delta = event.originalEvent.deltaY; // 아래로 굴리면 +, 위로 굴리면 -
    var ing = $("html,body").is(":animated");   //애니메이션중 :true, 안움직일때 false
    
    if(delta > 0 && !ing && page_num < total_num){
        page_num++;
        main();
    }else if(delta < 0 && !ing && page_num > 0){
        page_num--;
        main();
    }
});

// 스크롤탑 애니메이션
function main(){
    indi();

    if(page_num == total_num){
        $("html,body").stop().animate({scrollTop:(total_num - 1) * win_h + 240}, 1000, header);
    }else {
        $("html,body").stop().animate({scrollTop: page_num * win_h}, 1000, header);
    }
}

// 인디케이트 함수
function indi(){
    $(".indi").removeClass("active");
    $(".indi").eq(page_num).addClass("active");
    
    if(page_num == 1 || page_num == 3){
        $(".indi").addClass("color");
    }else {
        $(".indi").removeClass("color");
    }
}

// 섹션에 따른 헤더 함수
function header(){
    $("header").removeClass("white");
    $("header").removeClass("black");
    
    if(page_num == 0){
        // 투명
        $(".arrows").stop().fadeIn();
    }else if(page_num == 1){
        $("header").addClass("white");
    }else if(page_num == 2){
        // 투명
    }else if(page_num == 3){
        $("header").addClass("white");
    }else if(page_num == 4){
        // 투명
        $(".arrows").stop().fadeOut();
    }
}


