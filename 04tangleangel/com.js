// 2026-09-21 중복 스크립트 정리
var lastScroll = $(window).scrollTop();

function isMobile() {
    return $(window).width() <= 800;
}

// 헤더 보임/숨김
function header(sc) {
    if (sc <= 400 || sc < lastScroll) {
        $("header").css({ top: "0" });
    } else if (sc > lastScroll) {
        $("header").css({ top: "-100%" });
    }
    lastScroll = sc;
}

// 사이드바
function toggleSidebar(sc) {
    if (sc < 100) {
        $(".sidebar").stop().fadeOut(1000);
    } else {
        $(".sidebar").stop().fadeIn(1000);
    }
}

// 스크롤 시 실행할 함수
function onScroll() {
    var sc = $(window).scrollTop();
    header(sc);
    toggleSidebar(sc);
}

// 초기 실행
onScroll();
// 스크롤 실행
$(window).scroll(onScroll);


// 헤더 드롭메뉴
$("header .menu-li").hover(
    function() {
        $(this).find(".sub").stop().slideDown(500);
        $(this).find(".menu-title").css("color", "#694567");
    },
    function() {
        $(this).find(".sub").stop().slideUp(500);
        $(this).find(".menu-title").css("color", "#000000");
    }
);

// PC/MOB 검색
// 2026-09-28 화면 크기에 맞는 검색창 id
function searchTarget() {
    return isMobile() ? "mobali-search" : "search-sub";
}

// 검색 버튼 aria 초기화
function syncSearchAria() {
    $(".icon .search").attr({
        "aria-controls": searchTarget(),
        "aria-expanded": "false"
    });
}

syncSearchAria();           

// 검색창 열기
$("header .icon .search").click(function () {
    if (isMobile()) {
        $("#mobali-search").css({ left: "0" });
        $(this).attr("aria-expanded", "true");
    } else if ($(this).attr("aria-expanded") === "true") {
        $("#search-sub").stop().slideUp();
        $(this).attr("aria-expanded", "false");
    } else {
        $("#mobali-search").css({ left: "-100%" });
        $("#search-sub").stop().slideDown();
        $(this).attr("aria-expanded", "true");
    }
});

$(".search-sub .search-close").click(function() { // pc 검색창 닫기
    $("#search-sub").stop().slideUp();
    $(".icon .search").attr("aria-expanded", "false");
});

$(".mobali-search .search-close-m").click(function() { // mob 검색창 닫기
    $("#mobali-search").css({ left: "-100%" });
    $(".icon .search").attr("aria-expanded", "false");
});

// PC 로그인
$("header .icon .login").click(function() {
    $("#login-sub").stop().fadeIn();
    $(".icon .login").attr("aria-expanded", "true");
});

$("#login-sub .login-close, #login-sub .bg").click(function() {
    $("#login-sub").stop().fadeOut();
    $(".icon .login").attr("aria-expanded", "false");
});

// MOB 로그인
$("#mobali-sub .login-m").click(function () {
    $("#mobali-login").css({ left: "0" });
    $(this).attr("aria-expanded", "true");
});
$("#mobali-login .login-close-m").click(function () {
    $("#mobali-login").css({ left: "-100%" });
    $("#mobali-sub .login-m").attr("aria-expanded", "false");
});

// 회원 / 비회원 탭
function initLoginTab(wrapper, activeColor, inactiveColor) {
    var $wrap = $(wrapper);

    function setMode(isMember) {
        $wrap.find(".mem, .ch-group, .text").toggle(isMember);
        $wrap.find(".no-mem").toggle(!isMember);
        $wrap.find(".mem-on").css("color", isMember ? activeColor : inactiveColor);
        $wrap.find(".mem-off").css("color", isMember ? inactiveColor : activeColor);
    }

    // $wrap.find(".mem-on").click(function() { setMode(true); });
    // $wrap.find(".mem-off").click(function() { setMode(false); });
    var $radios = $wrap.find("input[type=radio]");
    $radios.on("change", function() {
        setMode($radios.index(this) === 0);
    });
}

initLoginTab(".login-sub", "#ffffff", "#444444");
initLoginTab(".mobali-login", "#222222", "#999999");

// 모바일 사이드바
$("header .ham-btn").click(function() {
    $(".mobali-bg").stop().fadeIn();
    $("#mobali-sub").css({ left: "0" });
    $("header .ham-btn").attr("aria-expanded", "true");
});
$(".mobali .x-btn, .mobali-bg").click(function() {
    $(".mobali-bg").stop().fadeOut();
    $(".mobali-sub").css("left", "-100%");
    $("header .ham-btn").attr("aria-expanded", "false");
});

// 모바일 드롭메뉴
$(".mobali-toggle").click(function () {
    var $ul = $(this).parent().siblings(".mobali-ul");
    var wasOpen = $(this).attr("aria-expanded") === "true";

    $(".mobali-toggle").attr("aria-expanded", "false");
    $(".mobali-ul").not($ul).stop().slideUp();

    $ul.stop().slideToggle();
    $(this).attr("aria-expanded", wasOpen ? "false" : "true");
});

// 2026-10-16 모달 리사이징
function closePcModals() { // pc 모달 모두 닫기
    $("#search-sub").stop(true, true).hide();
    $("#login-sub").stop(true, true).hide();
    $("header .menu-li .sub").stop(true, true).hide();
    $(".icon .search, .icon .login").attr("aria-expanded", "false");
}
function closeMobileModals() { // mob 모달 모두 닫기
    $("#mobali-search").css({ left: "-100%" });
    $("#mobali-login").css({ left: "-100%" });
    $("#mobali-sub").css({ left: "-100%" });
    $(".mobali-bg").stop(true, true).hide();
    $(".mobali-ul").stop(true, true).hide();
    $(".ham-btn, .login-m, .mobali-toggle").attr("aria-expanded", "false");
}

// 경계 확인
var wasMobile = isMobile();

$(window).on("resize", function() {
    var nowMobile = isMobile();
    if (nowMobile === wasMobile) return;   
    wasMobile = nowMobile;

    syncSearchAria();
    if (nowMobile) {
        closePcModals();       
    } else {
        closeMobileModals();   
    }
});


// 커서
$(window).mousemove(function(event){
    $(".cursor").css({ left: event.clientX, top: event.clientY });
});

var cursorHoverTargets = ".pick, .pick_";

$(cursorHoverTargets).mouseenter(function(){
    $(".cursor").addClass("over");
});
$(cursorHoverTargets).mouseleave(function(){
    $(".cursor").removeClass("over");
});

// 2026-09-21 디자인 알럿창 추가
$(function() {
    if ($(".alert").length === 0) {
        $("body").append("<div class='alert'><div class='alert-box'><span class='alert-title'>알림</span><span class='alert-text'></span></div><button type='button' class='alert-close'>확인</button></div>");
    }

    $(".alert .alert-close").on("click", hideAlert);
});

var alertTimer;

function showAlert(message) {
    clearTimeout(alertTimer);
    $(".alert .alert-text").stop().text(message);
    $(".alert").stop().addClass("on");

    alertTimer = setTimeout(hideAlert, 1800);
}

function hideAlert() {
    clearTimeout(alertTimer);
    $(".alert").removeClass("on");
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

$(".btn-heart").click(function() {
    if($(this).hasClass("on")) {
        showAlert("위시 등록을 취소했습니다");
        $(this).removeClass("on");
    } else {
        showAlert("위시 상품으로 등록했습니다.");
        $(this).addClass("on");
    }
    
    if(!$(this).hasClass("btn6")) {
        $(this).find(".fa-heart").toggle();
    }
});

$(".btn-cart").click(function() {
    showAlert("장바구니에 담겼습니다.");
});
