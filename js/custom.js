// loader
setTimeout(function () {
  document.querySelector('.loader').classList.add('hide');
}, 2000);

// nav-bar
function toggleMenu(x) {
  // icon animation
  x.classList.toggle("change");

  // menu open and close
  document.querySelector(".sidenav").classList.toggle("active");
}

// owl-carousel-banner-skills
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
        items: 5
      },
      768: {
        items: 5
      },
      1200: {
        items: 8
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
      1200: {
        items: 5
      }
    }
  });
});

// owl-carousel-projects
$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel-projects");
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
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
});