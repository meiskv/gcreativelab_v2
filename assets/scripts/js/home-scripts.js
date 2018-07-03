(function( $ ) {

   

// wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
  
// OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
window.requestAnimationFrame(function() {
    console.clear();

    let controller = new ScrollMagic.Controller({vertical: false});

    $('.home-cs-slide').each(function(){

      // let csExpand = TweenMax.from($(this),0.3,{width: '50vw', pause:true})
        let xCase = this;
        let scene = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 0.7,
          duration: 0,
          // loglevel: 3,
        })
        // .setTween(csExpand)
        .addTo(controller)
        .addIndicators({
          name: 'fade scene',
        })
        .on("enter", function (event) {
          scene.setClassToggle(xCase,'cs-expand')
          $(this).addClass('cs-expand');
        })
        .on("leave", function (event) {
          $(this).removeClass('cs-expand');
        })
    });

    var menuButton = document.querySelector('.menu-button');
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      initialSlide: 1,
      resistanceRatio: 0,
      simulateTouch: false,      
      touchRatio: 0,
      freeMode: true,
      // mousewheel: true,
      slideToClickedSlide: true,
      on: {
        init: function () {
          var slider = this;
          menuButton.addEventListener('click', function () {
            if (slider.activeIndex === 0) {
              slider.slideNext();
            } else {
              slider.slidePrev();
            }
          }, true);
        },
        slideChange: function () {
          var slider = this;
          if (slider.activeIndex === 0) {
            menuButton.classList.add('cross');
          } else {
            menuButton.classList.remove('cross');
          }
        },
      }
    });

    var swiper2 = new Swiper('.home-slide-container', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      mousewheel: true,
      freeMode: true,
      freeModeFluid: true,
      freeModeMomentumVelocityRatio: 0.5,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });


});
        
 })( jQuery );