(function($) {
    $(window).load(function(){
        $('.expandable-list').click(function() {
            $(this).find('ul').slideToggle();
        });

        $('.expandable-list a').click(function(e) {
            e.stopPropagation();
        });
    });
})(jQuery)
