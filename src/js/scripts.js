jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    // slide.waypoint(function (event, direction) {

    //     dataslide = $(this).attr('data-slide');

    //     if (direction === 'down') {
    //         $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
    //     }
    //     else {
    //         $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
    //     }

    // });

    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');
        var a = "-1";
        var dataslides= parseInt(a, 10) + parseInt(dataslide, 10);

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslides + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() === 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: parseInt("1", 10) + parseInt($('.slide[data-slide="' + dataslide + '"]').offset().top, 10)
        }, 1000, 'easeInOutQuint');

    }

   // function goToByScroll(dataslide) {
   //      htmlbody.animate({
   //          scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
   //      }, 2000, 'easeInOutQuint');
   //  }

    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });


});
