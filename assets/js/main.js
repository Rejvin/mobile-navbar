(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	$(".testimonial-section").owlCarousel({
		    items: 1,
		    autoplay: 3000,
		    margin: 60,
			loop: true,
			nav: true,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		    smartSpeed: 800
		});

        /*  Slick Nav Mobile menu  */
	   $('#menuResponsive').slicknav({
		   prependTo: "#mobile-menu-wrap",
		   allowParentLinks : false,
		   label: ''	
	   });


       $(window).bind('scroll', function() {
        var navHeight = $(".header-top-area").height();
        ($(window).scrollTop() > navHeight) ? $('.header-area-wrapper').addClass('goToTop') : $('.header-area-wrapper').removeClass('goToTop');
    	});


       $(".blog-area-slider").owlCarousel({
	    items: 3,
	    autoplay: true,
	    margin: 60,
		loop: true,
		nav: true,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
	    smartSpeed: 800,
	    responsive : {
			0 : {
				items: 1,
			},
			768 : {
				items: 2,
			},
			992 : {
				items: 3
			}
		}
	});	


    $('.slicknav_btn').click(function(){
     	$(this).fadeOut(300);
     	$('.menu-close').fadeIn(300);
     });
     $('.menu-close').click(function(){
     	$('.slicknav_nav, .menu-close').fadeOut(300);
     	$('.slicknav_btn').fadeIn(300);
     });
     $('.slicknav_btn').click(function(){
     	$('.slicknav_nav').fadeIn(300);
     });





    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	