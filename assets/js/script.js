$(".humber_menu").click(function () {
  $(".nav-menu").addClass("active");
  $(".back-layer").addClass("d-block");
  $("body").addClass("overflow-hidden");
});
$(".back-layer").click(function () {
  $(".nav-menu").removeClass("active");
  $(".back-layer").removeClass("d-block");
  $("body").removeClass("overflow-hidden");
  $(".arrivalAccordion").removeClass("active");

});
$(".nav-item .nav_link").click(function () {
  if ($(this).hasClass("dropdown-toggle")) {
  } else {
    $(".nav-menu").removeClass("active");
    $(".back-layer").removeClass("d-block");
    $("body").removeClass("overflow-hidden");
  }
});

$(".dropdown-item").click(function () {
  $(".nav-menu").removeClass("active");
  $(".back-layer").removeClass("d-block");
  $("body").removeClass("overflow-hidden");
});

function auto_tab_input() {
  $(".otp_div .form-control").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).nextAll(".otp_div .form-control:enabled:first").focus();
    }
  });
}
function auto_backspace() {
  $(".otp_div .form-control").keyup(function (e) {
    if (e.keyCode == 8) {
      if ($(this).prev().length > 0) {
        $(this).prev("input").focus();
      }
    }
  });
}
$(document).ready(function () {
  auto_tab_input();
  auto_backspace();
});

$(".like_pro svg").click(function () {
  $(this).toggleClass("active");
});

$(".Filter_btn").click(function () {
  $(".arrivalAccordion").addClass("active");
  $(".back-layer").addClass("d-block");
  $("body").addClass("overflow-hidden");
});
$(".arrivalAccordion .line").click(function () {
  $(".arrivalAccordion").removeClass("active");
  $(".back-layer").removeClass("d-block");
  $("body").removeClass("overflow-hidden");
});
