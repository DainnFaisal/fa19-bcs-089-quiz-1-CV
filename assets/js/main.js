!(function($) {
    "use strict";

    // Navigation Menu
    // targeting html
    $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            //generating hash
            var hash = this.hash;
            var target = $(hash);

            if (target.length) {
                e.preventDefault();

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');

                    $(this).closest('li').addClass('active');
                }
                // removing classes and adding classes if header reaches hash
                if (hash == '#header') {
                    $('#header').removeClass('header-top');
                    $("section").removeClass('section-show');

                    if ($('body').hasClass('mobile-nav-active')) {

                        $('body').removeClass('mobile-nav-active');
                        // adding toggle and fade out function 
                        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');

                        $('.mobile-nav-overly').fadeOut();
                    }
                    return;
                }
                // removing classes and adding classes if header reaches top
                if (!$('#header').hasClass('header-top')) {
                    $('#header').addClass('header-top');

                    setTimeout(function() {

                        $("section").removeClass('section-show');
                        $(hash).addClass('section-show');

                    }, 350);

                } else {
                    $("section").removeClass('section-show');

                    $(hash).addClass('section-show');
                }
                // animating body and html 
                $('html, body').animate({

                    scrollTop: 0
                }, 350);
                // changing body class on reaching appropriate event
                if ($('body').hasClass('mobile-nav-active')) {

                    $('body').removeClass('mobile-nav-active');

                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');

                    $('.mobile-nav-overly').fadeOut();
                }

                return false;

            }
        }
    });

    // Shwoing sections on loading with hash links
    if (window.location.hash) {

        var initial_nav = window.location.hash;

        if ($(initial_nav).length) {
            $('#header').addClass('header-top');

            $('.nav-menu .active, .mobile-nav .active').removeClass('active');

            $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
            // setting timeout function 
            setTimeout(function() {
                $("section").removeClass('section-show');

                $(initial_nav).addClass('section-show');
            }, 350);
        }
    }

    //Adjusting Mobile Navigation
    if ($('.nav-menu').length) {

        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });

        $('body').append($mobile_nav);

        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');
        // onclick event
        $(document).on('click', '.mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');

            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');

            $('.mobile-nav-overly').toggle();

        });

        // calling function when clicked 
        $(document).click(function(e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");

            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {

                    $('body').removeClass('mobile-nav-active');

                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');

                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });

    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // making counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    // Initiatlightbox featur
    $(document).ready(function() {
        $('.venobox').venobox({
            'share': false
        });
    });


})(jQuery);