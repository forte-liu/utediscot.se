// $(function() {
//     function getHash() {
//         return document.location.hash ? document.location.hash : '#start';
//     }

//     var current = getHash();

//     function changePage(next) {
//         if(current === next) {
//             return false;
//         }

//         $(current).fadeOut('fast', function(){
//             $(next).fadeIn('slow');
//         });
//         current = next;
//     }
//     $('.main article').addClass('invisible');

//     $('nav a').click(function() {
//         document.location.hash = '#' + $(this).attr('class');
//     });

//     $(window).hashchange(function(){
//         changePage(getHash());
//     });

//     $(current).fadeIn('fast');
// });

var parallaxify = function() {
    if (!document.createTouch) {
        $('#start').addClass('fixed').parallax("50%", 0.4);
        $('#bg-biljetter').addClass('fixed').parallax("50%", 0.4);
        $('#bg-jobba').addClass('fixed').parallax("50%", 0.4);
        $('#bg-kontakt').addClass('fixed').parallax("50%", 0.4);
    }
}

$(function() {
    parallaxify();
    $(window).resize(parallaxify);
});

$(window).load(function() {
    parallaxify();
});
