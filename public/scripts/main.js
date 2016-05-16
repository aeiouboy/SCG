'use strict';

// Rotaet Dropdown
$('.navbar-mobile button span').click(function () {
  $(this).children('.caret').toggleClass("rotate-180");
  $(this).closest('.nav').find('button a').not(this).children('.caret').removeClass("rotate-180");
});

$(".navbar-nav_desktop li a").on("click", function () {
  $("a").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});
'.btn-member_menu'.click(function () {
  $(this).children('.caret').toggleClass("rotate-180");
  $(this).closest('.nav').find('button a').not(this).children('.caret').removeClass("rotate-180");
});

// Lightbox
var lightbox = new Lightbox();
lightbox.load();
//# sourceMappingURL=main.js.map
