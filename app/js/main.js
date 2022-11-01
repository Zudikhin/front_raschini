$(document).ready(function () {
    "use strict";

    $(".nav_mobile_top_btn").click(function() {
        $(this).toggleClass("active");
        $(".nav_mobile_drop").toggleClass("active");
    });

    var lastScrollTop = 0;
    
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $('.header').addClass("white");
            if($(this).scrollTop() > 300) {
                $('.header').addClass("head_top");
            }
        } else {
            $('.header').removeClass("head_top");
            if($(this).scrollTop() == 0) {
                $('.header').removeClass("white");
            }
        }
        lastScrollTop = st;
    });

    $('.main_slider_mob').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
    });

    $('.main_slider_desk').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
    });

    $('.fashion_block').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        fade: true,
        accesibility: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        cssEase: 'linear',
        prevArrow: $('.fashion_block_item_text_top_left'),
        nextArrow: $('.fashion_block_item_text_top_right')
    });

    var countFashion = $(".fashion_block_item").length;

    $(".fashion_block_item_text_top_count").text("1/" + countFashion);

    $('.fashion_block').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.fashion_block_item_text_top_count').html(currentSlide+1 + "/" + countFashion);
    });

    $(".footer_mob_list_item_top").click(function() {
        if($(this).parent().hasClass("active")) {
            $(".footer_mob_list_item").removeClass('active');
            $(this).parent().removeClass("active");
        } else {
            $(".footer_mob_list_item").removeClass('active');
            $(this).parent().addClass("active");
        }
    });

});