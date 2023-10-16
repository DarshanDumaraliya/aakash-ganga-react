/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: Aakashganga
Version: 1.0.0
-------------------------------------------------------------------*/
(function ($) {
  "use strict";

  // Ready Function
  jQuery(document).ready(function ($) {
    var $this = $(window);

    // AOS Animation
    AOS.init({
      duration: 1200,
    });

    // Menu toggle
    $(".ag_menu_icon").on("click", function () {
      $(".ag_menu>ul").toggleClass("clicked");
    });

    // Div hide-show

    $(".ag_menu ul.clicked li a").on("click", function (event) {
      $(".ag_menu ul.clicked li ul").toggleClass("show");
    });

    $(".ag_opportunities_box .ag_toggle").on("click", function () {
      var parent = $(this).closest(".ag_opportunities_box");
      parent.find(".chide").toggleClass("hide");
      parent.find(".cactive").toggleClass("show");
      parent.find(".cimg").toggleClass("hide");

      var buttonText = $(this).text();
      $(this).text(buttonText === "Read More" ? "<Back" : "Read More");
    });

    var maxHeight = 0;
    jQuery(".ag_opportunities_box").each(function () {
      if (jQuery(this).height() > maxHeight) {
        maxHeight = jQuery(this).height();
      }
    });
    jQuery(".ag_opportunities_box").height(maxHeight);

    $(".add-show-class").on("click", function () {
      $(".hide-show-div").addClass("show");
    });

    $(".add-hide-class").on("click", function () {
      $(".hide-show-div").removeClass("show");
    });

    $(".add-show-class1").on("click", function () {
      $(".hide-show-div1").addClass("show1");
    });

    $(".add-hide-class1").on("click", function () {
      $(".hide-show-div1").removeClass("show1");
    });

    $(".add-show-class2").on("click", function () {
      $(".hide-show-div2").addClass("show2");
    });

    $(".add-hide-class2").on("click", function () {
      $(".hide-show-div2").removeClass("show2");
    });

    // Fixed Header
    // $(window).scroll(function () {
    //   if ($(window).scrollTop() >= 200) {
    //     $(".ag_header_wrap").addClass("fixed");
    //   } else {
    //     $(".ag_header_wrap").removeClass("fixed");
    //   }
    // });


     $('.main-submenu').hide()
      jQuery('.main-menu').on('click',function(){
        jQuery('.main-submenu').toggle();
    })
      

    //Partners  Slider
    $(".ag_partners_slider.owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });





    $('.main-submenu').hide()
      jQuery('.main-menu').on('click',function(){
        jQuery('.main-submenu').toggle();
    })



  });
})();
