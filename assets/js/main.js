(function ($) {
	"use strict";

    jQuery(document).ready(function($){

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


       
     $('.slicknav_btn').click(function(){
     	$('.menu-close').slideDown(500);
     });
     $('.menu-close').click(function(){
     	$('.slicknav_nav, .menu-close').slideUp(500);
     });
     $('.slicknav_btn').click(function(){
     	$('.slicknav_nav').slideDown(500);
     });





    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	
