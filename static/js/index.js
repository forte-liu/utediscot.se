var parallaxify = function() {
    if (!document.createTouch) {
        $('#start').addClass('fixed').parallax("50%", 0.4);
        $('#bg-biljetter').addClass('fixed').parallax("50%", 0.4);
        $('#bg-jobba').addClass('fixed').parallax("50%", 0.4);
        $('#bg-kontakt').addClass('fixed').parallax("50%", 0.4);
    }
}

var scrollToElement = function() {
    var href = $(this).attr('href');
    var target = $(href);
    var speed = 800;
    var windowSize = jQuery(window).height();
    var elementTop = jQuery(target).offset().top;
    var elementSize = jQuery(target).innerHeight();
    var destination;

    history.pushState(null, null, href);
    target.focus();

    if(windowSize > elementSize) {
        destination = elementTop - (windowSize - elementSize) / 2;
    } else {
        destination = elementTop;
    }

    $('html:not(:animated),body:not(:animated)').animate({
        scrollTop: destination
    }, speed);
    return false;
};


$(function() {
    parallaxify();
    $(window).resize(parallaxify);

    $('nav a,.smoothscroll').on('click', scrollToElement);
});

$(window).load(function() {
    parallaxify();
});
