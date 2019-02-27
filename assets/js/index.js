$(document).ready(function () {
  var introSwiper = new Swiper ('.swiper-intro', {
    loop: true,
    // autoplay: {
    //   delay: 8000
    // },
    effect: 'fade',
    speed: 600
  })
});

var blockHeight = $('#keyPoints').outerHeight();
$('#keyPoints').css('margin-top', '-' + blockHeight/2 + 'px');
$('.addHeightHeader').css('height', $('header').outerHeight() + 'px');
$('.addHeightKeyPoints').css('height', blockHeight/2 + 'px');
// $('#slickFeatureDots').css('padding-bottom', blockHeight/2 + 'px');

$(document).ready(function () {
  var introSwiper = new Swiper ('.swiper-case-studies', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 32,
    pagination: {
      el: '.swiper-case-studies-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-case-studies-next',
      prevEl: '.swiper-case-studies-prev',
    },
  })
});
