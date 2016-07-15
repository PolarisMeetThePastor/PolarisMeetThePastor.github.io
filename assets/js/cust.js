$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('nav').addClass("sticky");
  }
  else{
    $('nav').removeClass("sticky");
  }
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('#header').addClass("fade");
  }
  else{
    $('#header').removeClass("fade");
  }
});

$(document).ready(function() {
  $(".post-link").click(function(e) {
    //e.preventDefault();
    var dest = $(this).attr('href');
    $('html,body').animate({ scrollTop: $(dest).offset().top - 80 }, 'slow');
  });
});
