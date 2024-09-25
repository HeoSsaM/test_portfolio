/* tab메뉴 구성 */
$(document).ready(function () {
    // href 속성이 '#'인 모든 'a' 태그에 대해 클릭 이벤트 추가
    $('a[href="#"]').click(function (event) {
        // 기본 동작인 페이지 이동을 방지
        event.preventDefault();
    });

    $('.btn_mobile').on('click', function() {
        $('.sub_header').fadeToggle();
        $('.sub_header .btn_mobile').toggleClass('active')
    })


    /* $('.sub_header > .btn_mobile').on('click', function() {
        $('.sub_header').removeClass('on');
        
    }) */
    $('.btn_close').on('click', function () {
        $('.skip_event').fadeOut()
    })

    $('.product_list > li > a').on('click', function (e) {
        e.preventDefault();
    })

    $('.product_list li').click(function () {
        var index = $(this).index();
        //console.log(index)

        $('.product_list li').removeClass('active');
        $('.product_wrap > div').removeClass('active'); /* active가 display block역할을 해줌 */

        $(this).addClass('active');
        $('.product_wrap > div').eq(index).addClass('active');
        /* eq는 nth-child(index) 개념 */
    });

    $('.family_site > a').on('click', function () {
        $(this).toggleClass('on');
        $('.family_site > span').toggleClass('on');
    })

})

var swiper = new Swiper(".rbfy_visual", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    /* navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, */
});