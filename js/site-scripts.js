$(function() {

	/*carousel*/
    $('.slides-features').owlCarousel({
        items:1,
        loop:false,
        center:true,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:false,
        startPosition: 'URLHash',
        dots: true
    });

    /*add class for hash links*/
    $('.hash-for-slides a').on('click', function() {
    	$('.hash-for-slides a').removeClass('active');
    	$(this).addClass('active');
    });

    /*navTrigger*/
    $('.navTrigger').click(function(){
        $(this).toggleClass('active');
    });

    /*logo animation*/
        $('#examples img').hover(function () {
        var $imgObj = $(this);
        // class name
        var sClass = $(this).attr('class');
        // radius
        var iRad = 0;
        // interval
        var iInt;
        if (iInt) window.clearInterval(iInt);
        // loop until end
        iInt = window.setInterval(function() {
            var iWidth = $imgObj.width();
            var iHalfWidth = iWidth / 2;
            var iHalfHeight = $imgObj.height() / 2;
            if (sClass == 'type1') {
                $imgObj.css('-webkit-mask', '-webkit-gradient(radial, '+iHalfWidth+' '+iHalfHeight+', '+ iRad +', '+iHalfWidth+' '+iHalfHeight+', '+ (iRad + 30) +', from(rgb(0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0.2)), to(rgb(0, 0, 0)))');
            } else if (sClass == 'type2') {
                $imgObj.css('-webkit-mask', '-webkit-gradient(radial, '+iHalfHeight+' '+iHalfHeight+', '+ iRad +', '+iHalfHeight+' '+iHalfHeight+', '+ (iRad + 30) +', from(rgb(0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0.2)), to(rgb(0, 0, 0)))');
            }
            // when radius is more than our width - stop loop
            if (iRad > iWidth) {
                window.clearInterval(iInt);
            }
            iRad+=2;
        }, 10);
    });


    /*activate ladda button*/
    Ladda.bind( '.ladda-button' );

    /*animate logo*/
    $('.l-logo-link').hover(
        function() {
            $(this).addClass('active');
        },
        function() {
            $(this).removeClass('active');
        }
        );


    /*logo animation*/
    var logoLink           = $('.l-logo-link'),
        bigCircle          = $('.l-big-circle'),
        smallCircle        = $('.l-small-circle'),
        animateBigCircle   = TweenMax.to(bigCircle, 0.8, {scale: 4, transformOrigin: 'center center', repeat: 2, opacity: 0, ease:Linear.easeNone, paused:true}),
        animateSmallCircle = TweenMax.to(smallCircle, 0.4, {scale: 1.5, transformOrigin: 'center center', repeat: 2, yoyo: true, ease:Linear.easeNone, paused:true});

    logoLink.mouseenter(function() {
        logoLink.addClass('active');
        animateBigCircle.play();
        animateSmallCircle.play();
    });

    logoLink.mouseleave(function() {
        var currentTime = animateBigCircle.time();
        animateBigCircle.reverse(currentTime);
        animateSmallCircle.reverse(currentTime);
        setTimeout(function() {
            logoLink.removeClass('active');
        }, currentTime);
    });


    /* sticky menu */
    $("#sticker").sticky({topSpacing:0});

    /* scroll to menu */
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.section-menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.section-menu a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.section-menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.section-menu ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}



});