jQuery(document).ready(function ($) {
  $(".diplomas__list").owlCarousel({
    responsiveClass: true,
    nav: false,
    dots: false,
    items: 4,
    autoHeight: true,
    slidesPerView: 'auto',
    navContainer: ".slider-navigation",
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 4
      },
    }
  });

  $('.slider__button--next').click(function () {
    $(".diplomas__list").trigger('next.owl.carousel')
  })

  $('.slider__button--prev').click(function () {
    $(".diplomas__list").trigger('prev.owl.carousel', [300])
  })

  $(".tabs__content").not(":first").hide();
  $(".tabs__nav-item").click(function () {
    $(".tabs__nav-item").removeClass("tabs__nav-item--active").eq($(this).index()).addClass("tabs__nav-item--active");
    $(".tabs__content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("")
});