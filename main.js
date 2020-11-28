$(function () { //document ready
  
  var previous = $('.prev');
  var next = $('.next');

  next.click(function() {
    if ($('img.active').hasClass('last')) {
      $('img.first, img.last, .nav > i.first, .nav > i.last').toggleClass('active');
    } else {
      $('img.active, img.active + img, .nav > i.active, .nav > i.active + i').toggleClass('active');
    } 
  });

  previous.click(function() {
    if ($('img.active').hasClass('first')) {
      $('img.first, img.last, .nav > i.first, .nav > i.last').toggleClass('active');
    } else if ($('img:nth-child(2)').hasClass('active')) {
      $('img.first, img:nth-child(2), .nav > i.first, .nav > i:nth-child(2)').toggleClass('active');
    } else if ($('img:nth-child(3)').hasClass('active')) {
      $('img:nth-child(2), img:nth-child(3), .nav > i:nth-child(2), .nav > i:nth-child(3)').toggleClass('active');
    } else {
      $('img:nth-child(3), img.last, .nav > i:nth-child(3), .nav > i.last').toggleClass('active');
    } 
  });

  //BONUS PUNTI DELLA NAV OPERATIVI
  var bullets = [$('.nav > i.first'), $('.nav > i:nth-child(2)'), $('.nav > i:nth-child(3)'), $('.nav > i.last')];
  bullets[0].click(function() {
    if (!bullets[0].hasClass('active')) {
      $('.nav > i.first, .nav > i.active, img.first, img.active').toggleClass('active');
    }
  });

  bullets[1].click(function() {
    if (!bullets[1].hasClass('active')) {
      $('.nav > i:nth-child(2), .nav > i.active, img:nth-child(2), img.active').toggleClass('active');
    }
  });

  bullets[2].click(function() {
    if (!bullets[2].hasClass('active')) {
      $('.nav > i:nth-child(3), .nav > i.active, img:nth-child(3), img.active').toggleClass('active');
    }
  });

  bullets[3].click(function() {
    if (!bullets[3].hasClass('active')) {
      $('.nav > i.last, .nav > i.active, img.last, img.active').toggleClass('active');
    }
  });


});



