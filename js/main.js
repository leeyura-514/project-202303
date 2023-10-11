$(function () {
  /**
   * 메인비주얼 슬라이드 - pc
   */
  var promoSwiper = new Swiper(".promo-slide", {
    loop:true,
    speed:200,
    cssMode: true,
    autoplay:{
      delay: 4000,
      disableOnInteraction: false  
    },
    navigation: {
      nextEl: ".promo-slide .swiper-button-next",
      prevEl: ".promo-slide .swiper-button-prev",
    },
    pagination: {
      el: ".promo-slide .swiper-pagination",
      type: 'bullets',
      clickable: true
    },
  });

   /**
   * 메인비주얼 슬라이드 재생/정지 - pc
   */
  $('.promo-slide .control-play').click(function(e){
    e.preventDefault();
    const promoPlay = $(this);

    if (!promoPlay.find('.btn.play').hasClass('on')) {
      promoPlay.find('.btn.play').addClass('on');
      promoPlay.find('.btn.pause').removeClass('on');
      promoSwiper.autoplay.stop();
    } else {
      promoPlay.find('.btn.play').removeClass('on');
      promoPlay.find('.btn.pause').addClass('on');
      promoSwiper.autoplay.start();
    }
  })

  /**
   * app 슬라이드
   */
  var appSwiper = new Swiper('.app-slide', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.app-slide .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });

  /**
   * 메인비주얼 슬라이드 - mobile
   */
  var mpromoSwiper = new Swiper(".m-promo-slide", {
    loop: true,
    freeMode: false,//// 슬라이드 넘길 때 위치 고정 여부
    breakpoints: {
      319 : {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      767 : {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1023 : {
        slidesPerView: 4,
        spaceBetween: 40,
      }
    }
  });


    /**
   * 카드 안내 - pc & mobile
   */
  const ww = jQuery(window).width();
  const mySwiper = undefined;

  function initSwiper() {
    if (ww < 1024 && mySwiper == undefined) {
      var cardSwiper = new Swiper(".card-slide", {
        spaceBetween: 20,
        grabCursor: true,
        breakpoints: {
          319 : {
            slidesPerView: 1.2,
            spaceBetween: 40,
          },
          767 : {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1023 : {
            slidesPerView: 8,
            spaceBetween: 40,
          }
        }
      });
    } else if (ww >= 1024 && mySwiper != undefined) {//모니터 해상도가 1024px보다 같거나 크면 스와이퍼를 실행시키지 마라
      mySwiper.destroy();
      mySwiper = undefined;
    }
  }
  initSwiper();

  jQuery(window).on('resize', ()=> {
    ww = jQuery(window).width();
    initSwiper();
  });
}) 
  /**
   * tab 메뉴
   */
  function tabMenu(evt, tab) {
    var i, tabcontent, tablinks;
    tablinks = document.querySelectorAll(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    tabcontent = document.querySelectorAll(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();