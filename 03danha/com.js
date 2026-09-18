// 2026-09-16 중복 스크립트 정리
var lastScroll = $(window).scrollTop();

// 헤더 보임/숨김
function header() {
    var sc = $(window).scrollTop();

    if (lastScroll - sc < 0) {
         $("header").css({
            transform: "translateY(-100%)"
        });
    } else {
        $("header").css({
            transform: "translateY(0)",
            backgroundImage: "linear-gradient(rgba(2,40,64,0.8),transparent)"
        });
    }
    lastScroll = sc;
}

// 탑버튼
function toggleFloatingButtons(){
    var sc = $(window).scrollTop();
    var $buttons = $(".top-btn, .cons-btn");
    if(sc === 0){
        $buttons.stop().fadeOut(1000);
    } else {
        $buttons.stop().fadeIn(1000);
    }
}

function onScroll() {
    header();
    toggleFloatingButtons();
}
 
// 초기 실행
onScroll();

$(window).scroll(onScroll);

// 메뉴
$(".ham-btn").click(function(){
    $(this).toggleClass("active");
});

$("header .menu-li").mouseleave(function(){
    $(this).find(".sub").stop().slideUp();
});

$("header .menu-li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown();
});

//모바일
$(".mobali-sub-li h5").click(function(){
    $(".mobali-ul").stop().slideUp();
    $(this).next(".mobali-ul").stop().slideToggle();
});

$(".ham-btn").click(function(){
    $(".mobali-bg").stop().fadeToggle();
    $(".mobali-sub").toggleClass("active");
});
$(".mobali-bg").click(function(){
    $(".mobali-bg").stop().fadeOut();
    $(".mobali-sub").removeClass("active");
    $(".ham-btn").removeClass("active");
});

// 헤더 메뉴바 슬라이드
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
    $(".cursor").css({ left: event.clientX, top: event.clientY });
});

var cursorHoverTargets = ".pick, .pick_, .pick-a";

$(cursorHoverTargets).mouseenter(function(){
    $(".cursor").addClass("over");
});
$(cursorHoverTargets).mouseleave(function(){
    $(".cursor").removeClass("over");
});

// 2026-09-16 디자인 알럿창 추가
$(function() {
    if ($(".alert").length === 0) {
        $("body").append("<div class='alert'><span class='icon'>!</span><span class='alert-text'></span></div>");
    }
});

var alertTimer;

function showAlert(message) {
    clearTimeout(alertTimer);
    $(".alert .alert-text").stop().text(message);
    $(".alert").stop().addClass("on");

    alertTimer = setTimeout(function() {
        $(".alert").removeClass("on");
    }, 1800);
}

// 알럿 : 준비중
$(".soon").click(function(e) {
    e.preventDefault();
    showAlert("준비중 입니다.");
});
$(".secret").click(function(e) {
    e.preventDefault();
    showAlert("비밀글 입니다. 로그인 후 확인해주세요.");
});
$(".cart").click(function(e) {
    e.preventDefault();
    showAlert("장바구니에 담겼습니다.");
});