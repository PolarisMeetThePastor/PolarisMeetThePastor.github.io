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
