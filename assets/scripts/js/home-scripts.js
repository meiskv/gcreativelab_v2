(function( $ ) {

   

// wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
  
// OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
window.requestAnimationFrame(function() {
    console.clear();
    

    var Homepage = Barba.BaseView.extend({
      namespace: 'homepage',
      onEnter: function() {
          // The new Container is ready and attached to the DOM.
          console.log('home onEnter');
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
            slideToClickedSlide: false,
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

          var swiper2 = new Swiper('.home-slide-container', {
            direction: 'horizontal',
            slidesPerView: 'auto',
            mousewheel: true,
            centeredSlides: true,
            grabCursor: true,
            freeMode: true,
            freeModeFluid: true,
            freeModeMomentumVelocityRatio: 0.5,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            on: {
              init: function () {
                var slider = this;
                  if (slider.activeIndex === 0) {
                    let slideWrapper = $('.home-slide-container > .swiper-wrapper');

                    TweenLite.to(slideWrapper,0.5,{x:177})

                    slider.slideNext();
                  } else {
                    slider.slidePrev();
                  }
              }
            }
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
    Homepage.init();
    Barba.Prefetch.init();
    Barba.Pjax.start();

    let controller = new ScrollMagic.Controller({vertical: false});
  

    Barba.Dispatcher.on('initStateChange', function(currentStatus, oldStatus, container) {
      
        let pageTransition = new TimelineMax({onComplete: pageTransitionComplete, yoyo:true, repeat: 1});

        let $ww = window.innerWidth;

        pageTransition.set('.transition svg',{zIndex: -5});
        pageTransition.set('.transition svg',{zIndex: 999});
        pageTransition.set(['.white','.gray'],{x: $ww})
        pageTransition.to('.white',0.7,{x: 0, force3D: true, ease:Expo.easeInOut});
        pageTransition.to('.gray',0.7,{x: 0, force3D: true, delay: 0.2, ease:Expo.easeInOut},"-0.1");



        function pageTransitionComplete(){
            console.log('pageTransitionComplete');
        }
      
    });
    

    Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container) {

        // var about = new TimelineMax({delay: 1});

        // // ABOUT ANIMATION STARTS
        // var $content__header = $('.content__header');
        // var $content__subheader = $('.content__subheader');
        // var $content__description = $('.content__description p');


        // var $content__headerST = new SplitText([$content__header], {type:"words"});
        // var $content__subheaderST = new SplitText([$content__subheader], {type:"words"});
        // var $content__descriptionST = new SplitText([$content__description], {type:"words"});

        // $content__headerST.split({type:"chars, words"})
        // $content__subheaderST.split({type:"chars, words"})
        // $content__descriptionST.split({type:"chars, words,lines"})

        // about.staggerFromTo($content__headerST.chars, 1.2, {y:80, autoAlpha:0},{y:0, autoAlpha:1,ease: Power4.easeInOut}, 0.03)
        // about.staggerFromTo($content__subheaderST.chars, 1.2, {y:80, autoAlpha:0},{y:0, autoAlpha:1,ease: Power4.easeInOut}, 0.03,'-=1')
        // about.staggerFromTo($content__descriptionST.words, 0.5, {y:50, autoAlpha:0},{y:0, autoAlpha:1,ease: Expo.easeInOut}, 0.01,'-=1')
        
      

    });

  

 

  $('.home-slick').slick({
    // centerMode: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    slidesToShow: 5,
    cssEase: 'easeInOutExpo',    
  });



 



});
        
 })( jQuery );