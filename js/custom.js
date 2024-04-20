// loader
setTimeout(function() {
  document.querySelector('.loader').classList.add('hide');
}, 3500);

// nav-bar
function toggleMenu(x) {
  // icon animation
  x.classList.toggle("change");

  // menu open and close
  document.querySelector(".sidenav").classList.toggle("active");
}

// owl-carousel-banner-icons
$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 8,
    // margin: 5,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2020,
    smartSpeed: 2000,
    animateIn: 'linear',
    animateOut: 'linear',
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 6
      },
      300: {
        items: 6
      },
      768: {
        items: 6
      },
      1200: {
        items: 8
      }
    }
  });
});