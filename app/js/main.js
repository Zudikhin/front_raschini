$(document).ready(function () {
    "use strict";

    $(".nav_mobile_top_btn").click(function() {
        $(this).toggleClass("active");
        $(".nav_mobile_drop").toggleClass("active");
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
        arrows: false,
        speed: 500,
        fade: true,
        accesibility: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        cssEase: 'linear'
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