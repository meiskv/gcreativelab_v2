(function( $ ) {   

// wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets

// OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
window.requestAnimationFrame(function() {
    console.clear();

    console.log('%c☄ Site ❛ designed and developed ❜ with ♥︎ by Mikhail Español Villamor', ' font-family: Lato; font-weight: bold;background: #D81C5C; padding: 0.5rem 0.7rem; color: #ffffff'); 
    console.log('%c  ☄ LinkedIn : ⤙ https://www.linkedin.com/in/miksvillamor/ ⤚  ', ' font-family: Lato; font-weight: bold;background: #D81C5C; padding: 0.5rem 0.3rem; color: #ffffff'); 
    console.log('%c  ☄ Copyright © 2018 Grayling Dubai  ', ' font-family: Lato; font-weight: bold;background: #D81C5C; padding: 0.5rem 0.3rem; color: #ffffff'); 
     

    var Homepage = Barba.BaseView.extend({
      namespace: 'homepage',
      onEnter: function() {
          // The new Container is ready and attached to the DOM.
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

          function getTransform(el) {
            var results = $(el).css('-webkit-transform').match(/matrix(?:(3d)\(\d+(?:, \d+)*(?:, (\d+))(?:, (\d+))(?:, (\d+)), \d+\)|\(\d+(?:, \d+)*(?:, (\d+))(?:, (\d+))\))/)
        
            if(!results) return [0, 0, 0];
            if(results[1] == '3d') return results.slice(2,5);
        
            results.push(0);
            return results.slice(5, 8);
        }

        let slideWrapper = $('.home-slide-container > .swiper-wrapper');
        let mainSlider = $('.home-slide-container > .main-slide');
        let mainSliderr = document.getElementById("main-slide");

          let finalSliderMove;

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

                TweenLite.set('.home__backBtn',{autoAlpha: 0})
                
                var slider = this;
                  if (slider.activeIndex === 0) {
                    

                    finalSliderMove = slider.getTranslate()-slideWrapper.position().left+100;

                    TweenLite.to(slideWrapper,0.5,{force3D:true,x: finalSliderMove})

                    slider.slideNext();
                  } else {
                    slider.slidePrev();
                  }
              },
              slideChangeTransitionEnd: function (){
                let transEndSlider = this;

                if(transEndSlider.getTranslate()-50>=finalSliderMove){

                   TweenLite.to(slideWrapper, 1.5,{force3D:true,x: finalSliderMove,ease:Back.easeInOut})
                   transEndSlider.slideTo(1);
                   
                }

              },
              resize: function(){
                location.reload();
              },
              slideChange: function(){
                let slideChangeEndSlider = this;

                function fixedSlide(e){
                  
                  if(e.deltaY<=0){
                    if(slideChangeEndSlider.getTranslate()-50>=finalSliderMove){
                      
                            TweenLite.to(slideWrapper, 3,{force3D:true,x: finalSliderMove,ease:Expo.easeInOut})
                            slideChangeEndSlider.slideTo(1);
                            
                        }
                  }
                }

                
                if(window.addEventListener("wheel", _.debounce(fixedSlide,500))){

                  }
              },
              reachEnd: function(){
                let reachThis = this;
                TweenLite.to('.home__backBtn',0.5,{autoAlpha: 1})

                $('.home__backBtn').click(function(){
                  TweenLite.to(slideWrapper, 3,{force3D:true,x: finalSliderMove,ease:Expo.easeInOut})
                  reachThis.slideTo(1);
                });
              }
            }
        });


        var gpreload = new TimelineMax({repeat: -1, delay: 1});
        
        gpreload.to(".header_animation", 0.6, {text:"DIFFERENT",ease:Expo.easeInOut,delay: 0.3})
        .to(".header_animation", 0.6, {text:"ENTHUSIASTIC",ease:Expo.easeInOut})
        .to(".header_animation", 0.6, {text:"PASSIONATE",ease:Expo.easeInOut})
        .to(".header_animation", 0.6, {text:"CONNECTED",ease:Expo.easeInOut})
        .to(".header_animation", 0.6, {text:"VERSATILE",ease:Expo.easeInOut})
        .to(".header_animation", 0.6, {text:"EXPRESSIVE",ease:Expo.easeInOut})
        .to(".header_animation", 0.6, {text:"INNOVATIVE",ease:Expo.easeInOut})
        .to(".header_animation", 0.6, {text:"BOLD",ease:Expo.easeInOut});


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


  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      /**
       * This function is automatically called as soon the Transition starts
       * this.newContainerLoading is a Promise for the loading of the new container
       * (Barba.js also comes with an handy Promise polyfill!)
       */
  
      // As soon the loading is finished and the old page is faded out, let's fade the new page
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },
  
    fadeOut: function() {
      /**
       * this.oldContainer is the HTMLElement of the old Container
       */
  
      return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },
  
    fadeIn: function() {
      /**
       * this.newContainer is the HTMLElement of the new Container
       * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
       * Please note, newContainer is available just after newContainerLoading is resolved!
       */
  
      var _this = this;
      var $el = $(this.newContainer);
  
      $(this.oldContainer).hide();
  
      $el.css({
        visibility : 'visible',
        opacity : 0
      });
  
      $el.animate({ opacity: 1 }, 400, function() {
        /**
         * Do not forget to call .done() as soon your transition is finished!
         * .done() will automatically remove from the DOM the old Container
         */
  
        _this.done();
      });
    }
  });
  
  /**
   * Next step, you have to tell Barba to use the new Transition
   */
  
  Barba.Pjax.getTransition = function() {
    /**
     * Here you can use your own logic!
     * For example you can use different Transition based on the current page or link...
     */
  
    return FadeTransition;
  };

 
 



});
        
 })( jQuery );