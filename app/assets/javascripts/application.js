// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery.turbolinks
//= require jquery_ujs
//= require parallax.min
//= require_tree .

$(document).ready(function() {

  $(document).on("scroll", onScroll);
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
          $(this).closest('li').removeClass('active');
      })
      $(this).closest('li').addClass('active');

      var target = this.hash, menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+20
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
  new Main().initialize();
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.nav-div a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
      $('.nav-div ul li').removeClass("active");
      $('#contact-li').addClass("active");
    }
    else if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.nav-div ul li').removeClass("active");
      currLink.closest('li').addClass("active");
    }
    else{
      currLink.closest('li').removeClass("active");
    }
  });
}

//= require turbolinks
