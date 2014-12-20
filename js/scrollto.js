$(function() {
  var defaults = {
    duration : 1000,
    animate : true
  }

  $.scrollTo = function ( target, settings ) {
    if (target == null) {
      return false;
    }

    if (settings == null) {
      settings = {};
    }

    settings = $.extend( {}, defaults, settings );
    var top = $( target ).offset().top;

    if (settings.hasOwnProperty('offset')) {
      top = top - settings.offset;
    }

    if (settings.animate) {
      $('html,body').animate({ scrollTop: top }, settings.duration);
    }
    else {
      window.scrollTo(0, top);
    }
    
    return this;
  }
});