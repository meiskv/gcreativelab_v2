(function( $ ) {
    
    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
      
    // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
    window.requestAnimationFrame(function() {
        console.clear();
        
    
        var srvcpage = Barba.BaseView.extend({
          namespace: 'srvcpage',
          onEnter: function() {
              // The new Container is ready and attached to the DOM.
              console.log('srvcpage onEnter');
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
                  resize: function(){
                    let resizeThis = this;
                    location.reload();
                },
                }
              });
      
              swiper.update()
      
              $('.slick-services').slick({
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 1500,
                });


                var $content = new TimelineMax({delay: 0.5});
                
                        // ABOUT ANIMATION STARTS
                var $content__header = $('.content__header');
                var $content__subheader = $('.content__subheader');
                var $content__description = $('.content__description div');
            
            
                var $content__headerST = new SplitText([$content__header], {type:"words"});
                var $content__subheaderST = new SplitText([$content__subheader], {type:"words"});
                var $content__descriptionST = new SplitText([$content__description], {type:"words"});
            
                $content__headerST.split({type:"chars, words"})
                $content__subheaderST.split({type:"chars, words"})
                $content__descriptionST.split({type:"chars, words,lines"})
            
                $content.staggerFromTo($content__headerST.chars, 1.2, {y:80, autoAlpha:0},{y:0, autoAlpha:1,ease: Power4.easeInOut}, 0.03)
                $content.staggerFromTo($content__subheaderST.chars, 1.2, {y:80, autoAlpha:0},{y:0, autoAlpha:1,ease: Power4.easeInOut}, 0.03,'-=1')
                $content.staggerFromTo($content__descriptionST.words, 0.5, {y:50, autoAlpha:0},{y:0, autoAlpha:1,ease: Expo.easeInOut}, 0.01,'-=1')
          },
          onLeave: function() {
              // A new Transition toward a new page has just started.
          },
          onLeaveCompleted: function() {
              // The Container has just been removed from the DOM.
          }
        });
        
        // Don't forget to init the view!
        
        srvcpage.init();
        Barba.Prefetch.init();
        
    
    
    
    });
            
     })( jQuery );