


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
  var buttons = document.getElementsByClassName('filter-button');
  
  for (var i = 0; i < items.length; i++) {
    if (filter === 'all' || items[i].classList.contains(filter)) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
    }
  }
  
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].getAttribute('onclick').includes(filter)) {
      buttons[i].classList.add('active-filter');
    } else {
      buttons[i].classList.remove('active-filter');
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