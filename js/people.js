$(function() {
  var $page_person = $('#page-person');

  $('#page-people .col a').on('click', function(e) {
    $.scrollTo( $page_person, { duration: 'slow' });
    return false;
  });

  $('.jcarousel-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
  });

  $('.jcarousel-next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
  });

  $('#page-person .jcarousel').jcarousel({
    wrap: 'circular'
  });
});
