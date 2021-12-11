$(function () {

    /*counter part*/
    $('.countup').counterUp({
        delay: 10,
        time: 5000
    });



    /*slide part*/
    $('.active').slick({
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '.left-arrow',
        prevArrow: '.right-arrow',
    });


    //     PREALODER PART START 
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //    ==== Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //==== Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
AOS.init({
  duration: 1200,
    delay: 200
})



});
