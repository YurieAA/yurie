'use strict';


// SP ハンバーガーメニュー

$(".header__btn").click(function (evt) {
  $(this).toggleClass('active');
  $(".gnav").toggleClass('panelactive');
});

$(".gnav__link").click(function (evt) {
  $(".header__btn").removeClass('active');
  $(".gnav").removeClass('panelactive');
});

// TOPへ戻る

window.onscroll = function () {
  const scroll = window.pageYOffset;
  console.log(scroll);

  if (scroll >= 300) {
    $('#page-top').addClass('open');
    $('.header').addClass('opa1');
  } else {
    $('#page-top').removeClass('open');
    $('.header').removeClass('opa1');
  }
};


//FirstView title

setInterval(() => {
  $(".big__title").addClass("-visible");
  setTimeout(() => {
    $(".big__title").removeClass("-visible");
  }, 1500);
}, 1500 * 2);


//下から現れる

function delayScrollAnime() {
  let time = 0.5;
  let value = time;
  let windowWidth = $(window).width();
  let windowSm = 441;


  $('.about__content,.like__content').each(function () {
    let parent = this;
    let elemPos = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    let childs = $(this).children(); 
    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play") && windowWidth >= windowSm) {
      $(childs).each(function () {

        if (!$(this).hasClass("fadeUp")) {

          $(parent).addClass("play"); 
          $(this).css("animation-delay", value + "s");
          $(this).addClass("fadeUp");
          value = value + time;
          let index = $(childs).index(this);
          if ((childs.length - 1) == index) {
            $(parent).removeClass("play");
          }
        }
      })
    } else {
      $(childs).removeClass("fadeUp");
      value = time;
    }
  })
}


$(window).scroll(function () {
  delayScrollAnime();
});