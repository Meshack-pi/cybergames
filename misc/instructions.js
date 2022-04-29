$(function() {
    $(document).bind('keyup', function(e) {
        if(e.which == 39){
            $('.carousel').carousel('next');
        }
        else if(e.which == 37){
            $('.carousel').carousel('prev');
        }
    });
  $('.credits').html('Cyberneticsx was created by Meshack Kiprono inspired by how to speak tech<br><br>');

  $('#begin-btn').click(function() {
    location.href = "../index.html";
  });
  $('#view-btn').click(function() {
    if($(this).html() === 'Show Credits') {
      $('.credits').css({ display: 'block' });
      $('#credits-hide').css({ display: 'none' });
      $(this).html('Hide Credits');
    } else {
      $('.credits').css({ display: 'none' });
      $('#credits-hide').css({ display: 'block' });
      $(this).html('Show Credits');
    }
  });
});
