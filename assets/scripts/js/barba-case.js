(function( $ ) {
    
    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
      
    // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
    window.requestAnimationFrame(function() {
        console.clear();
        
    
        var casepage = Barba.BaseView.extend({
          namespace: 'casepage',
          onEnter: function() {
              // The new Container is ready and attached to the DOM.
              console.log('casepage onEnter');
          },
          onEnterCompleted: function() {
              // The Transition has just finished.
              var menuButton = document.querySelector('.menu-button');
              var swiper = new Swiper('.swiper-container', {
                slidesPerView: 'auto',
                initialSlide: 1,
                resistanceRatio: 0,
                simulateTouch: false,
                touchRatio: 0,
                freeMode: true,
                resizeReInit: true,
                observer: true,
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
      
              swiper.update()
      

              var caseStudy = new Swiper('.case-study-slide-container', {
                direction: 'horizontal',
                slidesPerView: 'auto',
                mousewheel: true,
                freeMode: true,
                infinite: true,
                mousewheelSensitivity: 0.02,
                freeModeFluid: true,
                freeModeMomentumVelocityRatio: 0.5,
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
            });
            
             
          },
          onLeave: function() {
              // A new Transition toward a new page has just started.
          },
          onLeaveCompleted: function() {
              // The Container has just been removed from the DOM.
          }
        });
        
        // Don't forget to init the view!
        
        casepage.init();
        Barba.Prefetch.init();
        Barba.Pjax.start();
        
    
    
    
    });
            
     })( jQuery );