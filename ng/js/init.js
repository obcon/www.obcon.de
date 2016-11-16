(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.obcon_imprint').hide();
    

    $('.nav_obcon_imprint').click(function() {
        $('.obcon_about').hide();
        $('.obcon_imprint').show();
    });

    $('.nav_obcon_about').click(function() {
        $('.obcon_imprint').hide();
        $('.obcon_about').show();
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space