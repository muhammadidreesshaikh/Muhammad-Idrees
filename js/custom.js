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
        items: 7
      },
      300: {
        items: 7
      },
      768: {
        items: 7
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

// slick-carousel-projects
$(document).ready(function () {
  $('.slick-carousel-projects').slick({
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    smartSpeed: 2000,
    speed: 800,
    loop: true,
    nav: false,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

// slick-carousel-testimonail
$(document).ready(function () {
  $('.slick-carousel-testimonail').slick({
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    smartSpeed: 2000,
    speed: 800,
    loop: true,
    nav: false,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});