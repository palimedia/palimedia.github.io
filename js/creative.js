/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // var jump=function(e)
    // {
    //     if (e){
    //         e.preventDefault();
    //         var target = $(this).attr("href");
    //     }else{
    //         var target = location.hash;
    //     }

    //     $('html,body').animate(
    //     {
    //         scrollTop: $(target).offset().top
    //     }, 1250, 'easeInOutExpo',function()
    //     {
    //         location.hash = target;
    //     });

    // }

    // $('html, body').hide();

    // $(document).ready(function()
    // {
    //     $('a[href^=#]').bind("click", jump);

    //     if (location.hash){
    //         setTimeout(function(){
    //             $('html, body').scrollTop(0).show();
    //             jump();
    //         }, 0);
    //     }else{
    //         $('html, body').show();
    //     }
    // });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {

        var $anchor = this.hash;
        
        if($($anchor).length) {
            $('html, body').stop().animate({
                scrollTop: ($($anchor).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        }
    }); 

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
