$(document).ready(function(){
  $(window).on('scroll', function(){
    if($(this).scrollTop() > '50') {
      $(".header .wrapper").addClass("scroll");
      $(".header").addClass("scroll_bg");
    }
    else {
      $(".header .wrapper").removeClass("scroll");
      $(".header").removeClass("scroll_bg");
    }
  })

let menuBtn = $('#menu_label');
let hamburgerMenu = $('.hamburger_menu');
menuBtn.on("click", function(){
  if (hamburgerMenu.hasClass('inactive')) {
    hamburgerMenu.removeClass('inactive');
    hamburgerMenu.addClass('active');
  } else {
    hamburgerMenu.removeClass('active');
    hamburgerMenu.addClass('inactive');
  }
});
/* ------ Slider_board --------*/
$('.fotorama').fotorama({
  maxwidth: '100%',
  nav: 'thumbs',
  arrows: true,
  loop: true,
  swipe: true
});
/*---------- Counter ----------*/
  let blockClick = $('.rating_stars');
  let windowClick= $('.click_block').text();
  blockClick.on('click', function() {
    windowClick++;
    $('.cnt').html(windowClick);
  });
});
/*----------- Tab -------------*/
$('.js-tab-trigger').click(function() {
    let id = $(this).attr('data-tab'),
    content = $('.js-tab-content[data-tab="'+ id +'"]');

    $('.js-tab-trigger.active').removeClass('active');
    $(this).addClass('active');

    $('.js-tab-content.active').removeClass('active');
    content.addClass('active');
  });

  /* ------- VIDEO ----------*/
    let blockVideo = $('.section_two_video');
blockVideo.each(function(){
  $('.video_btn').on("click", function(){
    let videos = $('.section_two_video').find("video");
    if (videos.length == 0) { return; }
    let video = videos[0];
    if (video.paused) {
      video.play();
      console.log(1);
    } else {
      video.pause();
      console.log(2);
    }
  });
  /* --------Slick SLIDER --------- */
  $('.section_three_slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 798,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
});
let socials = document.getElementsByTagName("div");
console.log(socials);




