function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
    $('.obcon_imprint').hide();


    $('.nav_obcon_imprint').click(function () {
      location.hash = 'imprint';
      $('.obcon_about').hide();
      $('.obcon_data_privacy').hide();
      $('.obcon_imprint').show();
    });

    $('.nav_obcon_about').click(function () {
      location.hash = '';
      $('.obcon_imprint').hide();
      $('.obcon_data_privacy').hide();
      $('.obcon_about').show();
    });

    $('.nav_obcon_data_privacy').click(function () {
      location.hash = '';
      $('.obcon_imprint').hide();
      $('.obcon_data_privacy').show();
      $('.obcon_about').hide();
    });

    $('.data-privacy-aggree-and-view-button').click(function () {
      location.hash = '';
      $('.data_privacy').hide();
      $('.data_privacy_box').hide();
      $('.obcon_about').hide();
      setCookie("data_privacy", "done", 365)
      $('.obcon_data_privacy').show();
    });

    $('.data-privacy-aggree-button').click(function () {
      location.hash = '';
      $('.data_privacy').hide();
      $('.data_privacy_box').hide();
      setCookie("data_privacy", "done", 365)
    });

    if (true || getCookie("data_privacy") == "") {
      var height = $('body').height()
      $('.data_privacy').height(height)
    } else {
      $('.data_privacy').hide();
      $('.data_privacy_box').hide();
    }

  }); // end of document ready
})(jQuery); // end of jQuery name space