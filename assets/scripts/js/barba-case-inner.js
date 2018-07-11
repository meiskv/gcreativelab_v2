(function( $ ) {
    
    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
      
    // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
    window.requestAnimationFrame(function() {
        console.clear();
        
    
        var caseinnerpage = Barba.BaseView.extend({
          namespace: 'caseinnerpage',
          onEnter: function() {
              // The new Container is ready and attached to the DOM.
              console.log('caseinnerpage onEnter');
          },
          onEnterCompleted: function() {
              // The Transition has just finished.
              var menuButton = document.querySelector('.menu-button');
              var swiper = new Swiper('.case-container', {
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
                  resize: function(){
                      let resizeThis = this;
                      location.reload();
                  }
                }
              });
      
              swiper.update()
      

              var caseInner = new Swiper('.case-inner-slide-container', {
                // direction: 'horizontal',
                slidesPerView: 'auto',
                mousewheel: true,
                freeMode: true,
                // infinite: true,
                mousewheelSensitivity: 0.02,
                freeModeFluid: true,
                parallax: true,
                freeModeMomentumVelocityRatio: 0.5,
               
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
        
        caseinnerpage.init();
        Barba.Prefetch.init();
        
    
    
    
    });
            
     })( jQuery );