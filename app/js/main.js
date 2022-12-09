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
                if (!$(".header").hasClass("over")) {
                    $('.header').addClass("head_top");
                }
            }
        } else {
            $('.header').removeClass("head_top");
            if($(this).scrollTop() == 0) {
                if($(".header").hasClass("over")) {
                    $('.header').addClass("white");
                } else {
                    $('.header').removeClass("white");
                }
            }
        }
        lastScrollTop = st;
    });

    $(".modal_cookie_accept").click(function() {
        $(".modal_cookie").addClass("hide");
    });

    $(".modal_cookie_close").click(function() {
        $(".modal_cookie").addClass("hide");
    });

    $(".modal_menu_nav_item_top").on("click", function(e) {
        $(".modal_menu_nav_item_body").slideUp(400);
        if($(this).parent().hasClass("active")) {
          $(this).parent().removeClass("active");
          $(".modal_menu_nav_item").removeClass("active");
        } else {
          $(this).next().slideToggle();
          $(".modal_menu_nav_item").removeClass("active");
          $(this).parent().addClass("active");
          $(this).next().slideDown(400);
        }
    });

    $(".hasChild_top").on("click", function(e) {
        $(".hasChild_body").slideUp(400);
        if($(this).parent().hasClass("active")) {
          $(this).parent().removeClass("active");
          $(".hasChild").removeClass("active");
        } else {
          $(this).next().slideToggle();
          $(".hasChild").removeClass("active");
          $(this).parent().addClass("active");
          $(this).next().slideDown(400);
        }
    });

    $(".cart_checkout_block_delivery_right_shop_current").click(function() {
        $(".cart_checkout_block_delivery_right_shop_drop").slideToggle();
        $(".cart_checkout_block_delivery_right_shop_current").toggleClass("active");
    });

    $(".cart_checkout_block_delivery_right_shop_drop_item").click(function() {
        var text = $(this).children().text();
        var id = $(this).attr("data-target");
        $(".cart_checkout_block_delivery_right_shop_info_item").removeClass("active");
        $(`#${id}`).addClass("active");
        $(".cart_checkout_block_delivery_right_shop_current span").text(text);
        $(".cart_checkout_block_delivery_right_shop_drop").slideToggle();
        $(".cart_checkout_block_delivery_right_shop_current").removeClass("active");
    });

    $("#pickup").click(function() {
        $(".cart_checkout_block_delivery_left_tabs_item").removeClass("active");
        $(this).addClass("active");
        $(".cart_checkout_block_delivery_right_wish").removeClass("active");
        $(".cart_checkout_block_delivery_right_shop").addClass("active");
        $(".cart_checkout_block_delivery_left_form .date").removeClass("hidden");
        $(".cart_checkout_block_delivery_left_form .city").addClass("hidden");
        $(".cart_checkout_block_delivery_left_form .address").addClass("hidden");
        if($(window).width() > 1200) {
            $(".cart_checkout_block_delivery_left_form_text").addClass("hide");
            $(".cart_checkout_block_delivery_right_choice").addClass("hide");
            $(".cart_checkout_block_delivery_right h3").addClass("hide");
            $(".cart_checkout_block_delivery_left_choice").removeClass("hide");
        }
    });

    $("#delivery").click(function() {
        $(".cart_checkout_block_delivery_left_tabs_item").removeClass("active");
        $(this).addClass("active");
        $(".cart_checkout_block_delivery_right_wish").addClass("active");
        $(".cart_checkout_block_delivery_right_shop").removeClass("active");
        $(".cart_checkout_block_delivery_left_form .date").addClass("hidden");
        $(".cart_checkout_block_delivery_left_form .city").removeClass("hidden");
        $(".cart_checkout_block_delivery_left_form .address").removeClass("hidden");
        if($(window).width() > 1200) {
            $(".cart_checkout_block_delivery_left_form_text").removeClass("hide");
            $(".cart_checkout_block_delivery_right_choice").removeClass("hide");
            $(".cart_checkout_block_delivery_right h3").removeClass("hide");
            $(".cart_checkout_block_delivery_left_choice").addClass("hide");
        }
    });

    $(".header_block_top_right_burger").click(function() {
        $(".modal_menu").addClass("active");
        $("body").addClass("scroll");
    });

    $(".modal_menu_top_close").click(function() {
        $(".modal_menu").removeClass("active");
        $("body").removeClass("scroll");
    });

    const inViewport = (elem) => {
        let allElements = document.getElementsByClassName(elem);
        let windowHeight = window.innerHeight;
        const elems = () => {
            for (let i = 0; i < allElements.length; i++) {  
                let viewportOffset = allElements[i].getBoundingClientRect();
                let top = viewportOffset.top;
                if(top < windowHeight) { 
                    allElements[i].classList.add('animation');
                } else{
                    allElements[i].classList.remove('in-viewport');
                }
            }
        }
        elems();
        window.addEventListener('scroll', elems);
    }

    inViewport("anime");

    $(".footer_desk_list_item_call").click(function() {
        $(".modal_form").addClass("active");
    });

    $(".footer_mob_call").click(function() {
        $(".modal_form").addClass("active");
    });

    $(".modal_form_close").click(function() {
        $(".modal_form").removeClass("active");
    });

    $(document).mouseup(function(e) {
        var container = $(".modal_form");
        var containerTwo = $(".modal_search");
        var containerThree = $(".modal_cookie");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".modal_form").removeClass("active");
        }
        if (!containerTwo.is(e.target) && containerTwo.has(e.target).length === 0) {
            $(".modal_search").removeClass("active");
        }
        if (!containerThree.is(e.target) && containerThree.has(e.target).length === 0) {
            $(".modal_cookie").addClass("hide");
        }     
    });

    $(".header_block_top_search").click(function() {
        $(".modal_search").addClass("active");
    });

    $(".modal_search_close").click(function() {
        $(".modal_search").removeClass("active");
    })

    $(".header").hover(function() {
        if ($(window).width() > 1199) {
            $(this).toggleClass("over");
            var scroll = $(window).scrollTop();
            if(scroll > 50) {
                $(this).addClass("white");
            } else {
                $(this).toggleClass("white");
            }
        }
    });

    $(".header_block_bottom_item").hover(function() {
        $(".header").toggleClass("pseudo");
    });

    $(".header_block_bottom_item_body_text_item ul li").hover(function() {
        var attr = $(this).attr("data-target");
        $(".header_block_bottom_item_body_text_item ul li").removeClass("active");
        $(".header_block_bottom_item_body_images_wrap").removeClass("active");
        $(this).addClass("active");
        $(`.${attr}`).addClass("active");
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