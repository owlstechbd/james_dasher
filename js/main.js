


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

function filterItems(filter = 'all') {
  var items = document.getElementsByClassName('items');
  
  for (var i = 0; i < items.length; i++) {
    if (filter === 'all' || items[i].classList.contains(filter)) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
    }
  }
}

function init() {
  filterItems();
}

window.onload = init;


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