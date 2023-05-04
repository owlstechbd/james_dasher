


// scrolling menu

$('.navbar-nav a[href^="#"]').click(function(e) {
  e.preventDefault();
  var target = this.hash;
  $('html, body').animate({
    scrollTop: $(target).offset().top -50
  },500);
});
$('.for-mobile a[href^="#"]').click(function(e) {
  e.preventDefault();
  var target = this.hash;
  $('html, body').animate({
    scrollTop: $(target).offset().top -50
  },500);
});

// fillter pluging


var typed = new Typed('.typed', {
  strings:[
    "Front-end developer =>",
    "Python Enthusiast",
    
  ],
    typeSpeed:80,
    backSpeed:80,
    loop:true
});


// animation

  new WOW().init();