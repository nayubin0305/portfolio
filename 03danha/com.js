//모바일
$(".mobali-sub-li").click(function(){
    $(".mobali-ul").stop().slideUp()
    $(this).find(".mobali-ul").stop().slideToggle()
})

$(".ham-btn").click(function(){
    $(".mobali-bg").stop().fadeToggle()
    $(".mobali-sub").toggleClass("active")
})
$(".mobali-bg").click(function(){
    $(".mobali-bg").stop().fadeOut()
    $(".mobali-sub").removeClass("active")
    $(".ham-btn").removeClass("active")
})
 
 // 탑버튼
 var to
 to = $(window).scrollTop()
     // console.log("스크롤"+to)
     if(to<100){
         $(".top-btn").stop().fadeOut(1000)
     }else{
         $(".top-btn").stop().fadeIn(1000)
     }
     $(window).scroll(function(){
         to = $(window).scrollTop()
         // console.log("스크롤"+to)
         if(to<100){
             $(".top-btn").stop().fadeOut(1000)
         }else{
             $(".top-btn").stop().fadeIn(1000)
         }
     })

// 상담
var co
 co = $(window).scrollTop()
     // console.log("스크롤"+to)
     if(co<100){
         $(".cons-btn").stop().fadeOut(1000)
     }else{
         $(".cons-btn").stop().fadeIn(1000)
     }
     $(window).scroll(function(){
         co = $(window).scrollTop()
         // console.log("스크롤"+to)
         if(co<100){
             $(".cons-btn").stop().fadeOut(1000)
         }else{
             $(".cons-btn").stop().fadeIn(1000)
         }
     })  


 // 헤더
 var scroll , sc
 scroll = $(window).scrollTop()
 sc = $(window).scrollTop()
     console.log(sc)
     if(scroll-sc < 0){
         // 내려가는 중
         $("header").css({height:"80px",top:"-100%"})
     }else if(scroll-sc > 0){
         // 올라가는 중
         $("header").css({
            height:"80px",top:"0",
            backgroundImage: "linear-gradient(rgba(2,40,64,0.8),transparent)"})
     }
     scroll=sc
 $(window).scroll(function(){
     sc = $(window).scrollTop()
     console.log(sc)
     if(scroll-sc < 0){
         // 내려가는 중
         $("header").css({height:"80px",top:"-100%"})
     }else if(scroll-sc > 0){
         // 올라가는 중
         $("header").css({height:"80px",top:"0",backgroundImage: "linear-gradient(rgba(2,40,64,0.8),transparent)"})
     }
     scroll=sc
 })

 $(".ham-btn").click(function(){
     $(this).index()
     $(".ham-btn").toggleClass("active")
 })

 $("header .menu-li").mouseleave(function(){
     $(this).find(".sub").stop().slideUp()
 })
 $("header .menu-li").mouseenter(function(){
     $(this).find(".sub").stop().slideDown()
 })

// 헤더 메뉴바
var swiper = new Swiper("header .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: 3000,
    pagination: {
      el: "header .swiper-pagination",
      clickable: true,
    },
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
    delay : 3000,   // 시간 설정
    disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });

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
$(".pick-a").mouseenter(function(){
$(".cursor").addClass("over")
})
$(".pick-a").mouseleave(function(){
    $(".cursor").removeClass("over")
})