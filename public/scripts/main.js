"use strict";

// Rotate Dropdown
$(document).ready(function () {
  $('.navbar-mobile button span, .dropdown-toggle, button').click(function () {
    $(this).children('.caret').toggleClass("rotate-180");
    $(this).closest('.nav').find('button a, a').not(this).children('.caret').removeClass("rotate-180");
  });

  $(".navbar-nav_desktop li a").on("click", function () {
    $("a").find(".active").removeClass("active");
    $(this).parent().addClass("active");
  });

// interval slide timeout

  $('.carousel').carousel({
  interval: 5000
});

// Back to top button
if ( ($(window).height() + 800) < $(document).height() ) {
$('#top-link-block').removeClass('hidden').affix({
    offset: {top:800}
});
}


});
