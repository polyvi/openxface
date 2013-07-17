(function($) {
    $(window).load(function(){
        $('.expandable-list').click(function() {
            $(this).find('ul').slideToggle();
        });
    });
})(jQuery)


 
