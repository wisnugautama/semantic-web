$(document).ready(function() {
    $('header').click(function(e) {
        
        var targetHref = $(this).attr('href');
        
      $('body').animate({
          scrollTop: $(targetHref).offset().top
      }, 1000);
      
      e.preventDefault();
    });
  });