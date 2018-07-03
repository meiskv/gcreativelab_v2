(function( $ ) {

   

// wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
  
// OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
window.requestAnimationFrame(function() {
    console.clear();

    
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