// loader
setTimeout(function () {
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
  var owl = $(".owl-carousel-skills");
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
        items: 2
      },
      300: {
        items: 2
      },
      768: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });
});

// owl-carousel-services
$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel-services");
  owl.owlCarousel({
    items: 5,
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
        items: 1
      },
      300: {
        items: 2
      },
      768: {
        items: 3
      },
      // 1920
      1200: {
        items: 5
      }
    }
  });
});