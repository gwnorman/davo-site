$(document).ready(function() {
    if ($(window).width() < 769) {
        $(".pos-abc").appendTo(".services-one");
    }


    $(".modalClick").fancybox({
        maxWidth	: 800,
        maxHeight	: 600,
        fitToView	: false,
        width		: '70%',
        height		: '70%',
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none'
    });

    $('#support-doc-link').on( "click", function() {
        $('.support-documents').slideToggle();
        $('.support-doc-title .fa').toggleClass('fa-angle-double-down fa-angle-double-up');

    });

    $('#banners-desktop').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:7500,
        animateIn: 'fadeIn', // add this
        animateOut: 'fadeOut', // and this
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#banners-mobile').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:7500,
        animateIn: 'fadeIn', // add this
        animateOut: 'fadeOut', // and this
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:7500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    });


});