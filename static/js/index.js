$(function() {
    function getHash() {
        return document.location.hash ? document.location.hash : '#start';
    }

    var current = getHash();

    function changePage(next) {
        if(current === next) {
            return false;
        }

        $(current).fadeOut('fast', function(){
            $(next).fadeIn('slow');
        });
        current = next;
    }
    $('.main article').addClass('invisible');

    $('nav a').click(function() {
        document.location.hash = '#' + $(this).attr('class');
    });

    $(window).hashchange(function(){
        changePage(getHash());
    });

    $(current).fadeIn('fast');
});
