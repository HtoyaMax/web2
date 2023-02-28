var header = $(".header-home");
var scrollChange = 25;
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= scrollChange) {
    header.addClass("header-bg");
  } else {
    header.removeClass("header-bg");
  }
});

$(".btn-trigger").click(function () {
  $("header").toggleClass("open-menu");
});

$(document).ready(function () {
  var $list = $(".card-product-box .card").show(),
    $content;

  $(".button")
    .on("click", function () {
      var $this = $(this);
      $this.addClass("active").siblings().removeClass("active");
      $content = $list.filter("." + this.id).hide();
      $content.slice(0, 6).show(400);
      $list.not($content).hide(300);
    })
    .filter(".active")
    .click();

  $("#LoadMore").on("click", function () {
    $content.filter(":hidden").slice(0, 3).slideDown("slow");
  });
});

const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  curentPopup.classList.add("open");
  curentPopup.addEventListener("click", function (e) {
    if (!e.target.closest(".popup__content")) {
      popupClose(e.target.closest(".popup"));
    }
  });
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      // bodyUnlock();
    }
  }
}

$(document).ready(function () {
  $(".slider-news").slick({
    arrows: true,
    infinite: true,
    variableWidth: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
  $(".slidernews").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  });
});

$(document).ready(function () {
  var $list = $(".news-content .item").show(),
    $content;

  $(".button")
    .on("click", function () {
      var $this = $(this);
      $this.addClass("active").siblings().removeClass("active");
      $content = $list.filter("." + this.id).hide();
      $content.slice(0, 12).show(400);
      $list.not($content).hide(300);
    })
    .filter(".active")
    .click();
});
