// 2026-09-10 주석추가 및 스크립트 정리
//  스와이퍼 실행하기
// 메인배너
var slider1 = new Swiper(".slider-1", {
    autoplay: {delay: 3000},
    loop: true,
    pagination:{el:".main .pagination" ,clickable: true,},
    navigation:{
        prevEl:".main .btn-left",
        nextEl:".main .btn-right",
    }
});

// 섹션 3
var slider2 = new Swiper(".slider-2", {
    autoplay: {delay: 3000},
    loop: true,
    pagination:{el:".section3 .pagination" ,clickable: true,},
    navigation:{
        prevEl:".section3 .btn-left",
        nextEl:".section3 .btn-right",
    },
    spaceBetween: 50,
    breakpoints: {
        500: {slidesPerView: 1},
        768: {slidesPerView: 3},
        1024: {slidesPerView: 4}
    },
});

// 섹션 9
var slider3 = new Swiper(".slider-3", {
    autoplay: {delay: 3000},
    loop: true,
    pagination:{el:".section9 .pagination" ,clickable: true,},
    navigation:{
        prevEl:".section9 .btn-left",
        nextEl:".section9 .btn-right",
    },
    spaceBetween: 50,
    breakpoints: {
        500: {slidesPerView: 1},
        768: {slidesPerView: 3},
        1024: {slidesPerView: 4}
    },
});

// 섹션 1 상품 팝업
$(".section1 .item").click(function(){
    var pop_i = $(this).index();
    $(".section1 .popup").stop().fadeIn();
    $(".section1 .pop-box").stop().fadeOut();
    $(".section1 .pop-box").eq(pop_i).stop().fadeIn();
});

$(".section1 .popup .bg").click(function(){
    $(".section1 .popup").stop().fadeOut();
});

// 2026-09-10 섹션 6 폼 스크립트 추가
$(".section6 form").on("submit", function(e) {
    e.preventDefault();
    showAlert("문의요청 전송이 완료되었습니다.");
    this.reset();
});