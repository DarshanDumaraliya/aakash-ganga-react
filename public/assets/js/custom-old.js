/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: Aakashganga
Version: 1.0.0
-------------------------------------------------------------------*/
(function($){
    "use strict";
  
    // Ready Function
    jQuery(document).ready(function($){
        var $this = $(window);

        // AOS Animation
        AOS.init({
            duration: 1200,
        })

        // Menu toggle
        $('.ag_menu_icon').on('click',function () {
            $('.ag_menu>ul').toggleClass('clicked');
        });

        // Fixed Header
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 200) {
                $('.ag_header_wrap').addClass('fixed');
            }
            else {
                $('.ag_header_wrap').removeClass('fixed');
            }
        });

        // Partners  Slider
        $('.ag_partners_slider.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })


    });
})();