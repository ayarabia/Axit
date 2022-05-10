

$(function(){
    'use strict';
    $(window).scroll(function(){
var navbar=$('.navbar');
        // window.console.log($('.navbar').height())
        // window.console.log($(window).scrollTop())
        if(($(window).scrollTop())>=navbar.height()){
            console.log("hollo1");
            navbar.addClass('scrolled')
        }else{
            console.log("hollo2");
            navbar.removeClass('scrolled')
        }

//         if(($(window).scrollTop())>=navbar.height()){
// navbar.toggleClass("scrolled");


//         }

    })
})