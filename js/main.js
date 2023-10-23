(function($) {
    "use strict";

    $('[data-toggle="tooltip"]').tooltip();

    $(".search-h-icon").on("click", function() {
        $(".header-s-input").slideToggle("slow");
    });

    $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
        var $this = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");

        if (!$this.next().hasClass("show")) {
            $this.parents(".dropdown-menu").first().find(".show").removeClass("show");
        }

        $this.next(".dropdown-menu").toggleClass("show");
        $this.parent("li").toggleClass("show");

        if (!$this.parent().hasClass("navbar-nav")) {
            $this.next().css({
                top: $this[0].offsetTop,
                left: $parent.outerWidth() - 4
            });
        }

        return false;
    });

    $(function() {
        $(".pop-video").videoPopup({
            autoplay: 1,
            controlsColor: "white",
            showVideoInformations: 0,
            width: 1000,
            customOptions: {
                rel: 0,
                end: 60
            }
        });
    });

    $(".client-items").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        autoplayHoverPause: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 600,
        responsive: {
            0: { items: 2 },
            480: { items: 3 },
            768: { items: 6 },
            992: { items: 7 },
            1200: { items: 7 },
            1440: { items: 7 }
        }
    });

    $(".testimonial").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplayHoverPause: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 600,
        responsive: {
            0: { margin: 0, items: 1 },
            480: { items: 1 },
            768: { items: 2 },
            992: { items: 2 },
            1200: { items: 2 },
            1440: { items: 2 }
        }
    });

    $(".testimonial2").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplayHoverPause: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 600,
        responsive: {
            0: { margin: 0, items: 1 },
            480: { items: 2 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 3 },
            1440: { items: 3 }
        }
    });

    $(".testimonial3").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplayHoverPause: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 600,
        responsive: {
            0: { margin: 0, items: 1 },
            480: { items: 1 },
            768: { items: 1 },
            992: { items: 1 },
            1200: { items: 1 },
            1440: { items: 1 }
        }
    });

    var $window = $(window);
    var $body = $("body");
    var $header = $("header");

    $window.on("load", function() {
        var $preloader = $(".preloader");
        $preloader.find(".whirlpool").fadeOut();
        $preloader.delay(350).fadeOut("slow");
    });

    window.addEventListener('scroll', function() {
        var headerMenu = document.querySelector('.header-menu');
        var headerCenter = document.querySelector('.header-center');
        var headerCenterHeight = headerCenter.offsetHeight;
    
        if (window.pageYOffset >= headerCenterHeight) {
            headerMenu.classList.add('fixed-nav');
        } else {
            headerMenu.classList.remove('fixed-nav');
        }
    });
    
})(jQuery);
