$(document).ready(function(){$(window).width()<769&&$(".pos-abc").appendTo(".services-one"),$(".modalClick").fancybox({maxWidth:800,maxHeight:600,fitToView:!1,width:"70%",height:"70%",autoSize:!1,closeClick:!1,openEffect:"none",closeEffect:"none"}),$("#support-doc-link").on("click",function(){$(".support-documents").slideToggle(),$(".support-doc-title .fa").toggleClass("fa-angle-double-down fa-angle-double-up")}),$("#banners-desktop").owlCarousel({loop:!0,margin:10,nav:!0,autoplay:!0,autoplayTimeout:7500,animateIn:"fadeIn",animateOut:"fadeOut",responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$("#banners-mobile").owlCarousel({loop:!0,margin:10,nav:!0,autoplay:!0,autoplayTimeout:7500,animateIn:"fadeIn",animateOut:"fadeOut",responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$("#testimonials-carousel").owlCarousel({loop:!0,margin:10,autoplay:!0,autoplayTimeout:7500,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:2,nav:!0},1e3:{items:4,nav:!0,loop:!0}}})});