(function ($) {
    "use strict";


    // Hamburger

    // $('.menu-link').click(function (e) {
    //     e.preventDefault()
    //     $('.nav-lg').toggleClass('show-nav')
    //     $('.container-nav').toggleClass('show-col')
    // })

    // Slider

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        autoplayHoverPause:true
    });

    $(".ham").click(function(e){
        e.preventDefault()
        $('.ham').toggleClass("is-active");
        $('.nav-lg').toggleClass('show-nav')
        $('.container-nav').toggleClass('show-col')
    });


})(jQuery);