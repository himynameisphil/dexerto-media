$(function() {
  var header = $("header");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
      header.removeClass('pt-16').addClass("bg-slate py-4");
    } else {
      header.removeClass("bg-slate py-4").addClass('pt-16');
    }
  });
});
