(function( $ ) {   

// wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets

// OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
window.requestAnimationFrame(function() {

      function onImagesLoaded(container, event) {
        var images = container.getElementsByTagName("img");
        var loaded = images.length;
        for (var i = 0; i < images.length; i++) {
            if (images[i].complete) {
                loaded--;
            }
            else {
                images[i].addEventListener("load", function() {
                    loaded--;
                    if (loaded == 0) {
                        event();
                    }
                });
            }
            if (loaded == 0) {
                event();
            }
        }
    }

    var container = document.getElementById("barba-wrapper");

   

    

    var Homepage = Barba.BaseView.extend({
      namespace: 'homepage',
      onEnter: function() {
          // The new Container is ready and attached to the DOM.
          var svgLoadedHolder = document.querySelector('#logo__holder');
          var svgLoadedHolderLoaded = "<div id='logo__holder_loaded'></div>";

          var homeHeight = $('.home-slide-container .swiper-slide');
          var menuHeight = $('.menu');

          let $wwCh = window.innerHeight;

          TweenMax.set(homeHeight,{height: $wwCh});
          TweenMax.set(menuHeight,{height: $wwCh});
          

          if (svgLoadedHolder.getElementsByTagName('div').length) {
            console.log('div already added.');
          }else{
            $(svgLoadedHolder).append(svgLoadedHolderLoaded);        
            var logoLoaded = {
              container: document.getElementById('logo__holder_loaded'),
              renderer: 'svg',
              loop: false,
              // yoyo: true,
              autoplay: true,
              path: 'http://www.gcreativelab.com/wp-content/themes/gcreativelab_v2/assets/images/bodymovin/logo_loaded.json'
            };
            
            // http://localhost:8888/DEV/gcreative/wp-content/themes/gcreativelab/assets/images/bodymovin/logo_loaded.json
            // http://www.gcreativelab.com/wp-content/themes/gcreativelab_v2/assets/images/bodymovin/logo_loaded.json
  
            var xspan = document.getElementById("logo__holder_loaded");
  
            if (xspan.getElementsByTagName('svg').length) {
              console.log('svg already added.');
            }else{
              var animLogoLoaded;
              animLogoLoaded = bodymovin.loadAnimation(logoLoaded);
            }    
          }
          
          
          
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
                  

                  let $wwCh = window.innerWidth;
                  
                  
                  if (slider.activeIndex === 0) {
                    slider.slideNext();
                  } else {
                    slider.slidePrev();
                  }
                  

                }, true);
              },
              slideChange: function () {
                var slider = this;
                let $wwCh = window.innerWidth;

                if (slider.activeIndex === 0) {
                  menuButton.classList.add('cross');
                  let src = 'http://www.gcreativelab.com/wp-content/themes/gcreativelab_v2/assets/images/gcreative_logo_white.svg';
                  $('.glogo').attr('src', src);

                  let menuIcon = 'http://www.gcreativelab.com/wp-content/themes/gcreativelab_v2/assets/images/menu_close.svg';
                  $('.menu-icn').attr('src', menuIcon);

                  TweenMax.staggerFromTo('#menu li a', 0.1,{x: '-140',autoAlpha:0},{x: '0',autoAlpha:1, ease:Power4.easeInOut}, 0.1);

                  if($wwCh<=415){
                    
                        TweenLite.to('#logo__holder_loaded',1,{
                          top: 0,
                          left: 2.5,
                          width: '50px',
                          height: '65px',
                          ease: Expo.easeInOut, 
                        });
                  }
  
                  if($wwCh<=376){
                    
                        TweenLite.to('#logo__holder_loaded',1,{
                          top: 0,
                          left: 1,
                          width: '50px',
                          height: '65px',
                          ease: Expo.easeInOut, 
                        });
                      
                  }

                } else {
                  menuButton.classList.remove('cross');
                  let src = 'http://www.gcreativelab.com/wp-content/themes/gcreativelab_v2/assets/images/gcreative_logo.svg';
                  $('.glogo').attr('src', src);

                  let menuIcon = 'http://www.gcreativelab.com/wp-content/themes/gcreativelab_v2/assets/images/menu-lines.svg';
                  $('.menu-icn').attr('src', menuIcon);

                  if($wwCh<=415){
                    TweenLite.to('#logo__holder_loaded',1,{
                      top: 32,
                          left: 80,
                          width: '103px',
                          height: '115px',
                          ease: Expo.easeInOut, 
                    });
                  }

                  if($wwCh<=376){
                    
                      TweenLite.to('#logo__holder_loaded',1,{
                        top: 32,
                            left: 80,
                            width: '103px',
                            height: '115px',
                            ease: Expo.easeInOut, 
                      });
                      
                  }

                }
              },
              resize: function(){ 
                console.log('resizing');
                window.location.href = window.location.href;            
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
        let winCurrentWidth = 100;

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
            // Responsive breakpoints
            breakpoints: {
              // when window width is <= 320px
              320: {
                slidesPerView: 'auto',
              },
              // when window width is <= 480px
              480: {
                slidesPerView: 'auto',
              },
              // when window width is <= 640px
              640: {
                slidesPerView: 'auto',
              }
            },
            on: {
              init: function () {

                TweenLite.set('.home__backBtn',{autoAlpha: 0})
                
                var slider = this;
                let $wwCh = window.innerWidth;
                                

                  if (slider.activeIndex === 0) {
                   
                    finalSliderMove = slider.getTranslate()-slideWrapper.position().left+winCurrentWidth;
                    
                    TweenLite.to(slideWrapper,0.5,{force3D:true,x: finalSliderMove})

                    slider.slideNext();
                  } else {
                    slider.slidePrev();
                  }
              

              },
              slideChangeTransitionEnd: function (){
                let transEndSlider = this;

                let $wwCh = window.innerWidth;

                if($wwCh>=768){
                  console.log(transEndSlider.getTranslate());
                  if(transEndSlider.getTranslate()<=(-300)){
                      TweenLite.to('#logo__holder_loaded',1,{
                        top: 0,
                        left: 2.5,
                        width: '50px',
                        height: '65px',
                        ease: Expo.easeInOut, 
                      });
                  }else{
                    TweenLite.to('#logo__holder_loaded',1,{
                      top: 32,
                          left: 80,
                          width: '103px',
                          height: '115px',
                          ease: Expo.easeInOut, 
                    });
                    
                  }
                }

                if($wwCh<=415){
                  if(transEndSlider.getTranslate()<=500){
                      TweenLite.to('#logo__holder_loaded',1,{
                        top: 0,
                        left: 2.5,
                        width: '50px',
                        height: '65px',
                        ease: Expo.easeInOut, 
                      });
                  }else{
                    TweenLite.to('#logo__holder_loaded',1,{
                      top: 32,
                          left: 80,
                          width: '103px',
                          height: '115px',
                          ease: Expo.easeInOut, 
                    });
                    
                  }
                }

                if($wwCh<=376){
                  if(transEndSlider.getTranslate()<=500){
                      TweenLite.to('#logo__holder_loaded',1,{
                        top: 0,
                        left: 1,
                        width: '50px',
                        height: '65px',
                        ease: Expo.easeInOut, 
                      });
                  }else{
                    TweenLite.to('#logo__holder_loaded',1,{
                      top: 32,
                          left: 80,
                          width: '103px',
                          height: '115px',
                          ease: Expo.easeInOut, 
                    });
                    
                  }
                }
                
                  
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
                let $wwCh = window.innerWidth;

                if($wwCh<=415){
                  
                  // console.log(slideChangeEndSlider.getTranslate());
                  // if(slideChangeEndSlider.getTranslate()<=500){
                    
                  //     TweenLite.to('#logo__holder_loaded',0.5,{
                  //       top: 0,
                  //       left: 0,
                  //     });
                  // }
                }
                
                function fixedSlide(e){
                  
                  if(e.deltaY<=0){
                    if(slideChangeEndSlider.getTranslate()-50>=finalSliderMove){
                      
                            TweenLite.to(slideWrapper, 3,{force3D:true,x: finalSliderMove,ease:Expo.easeInOut})
                            slideChangeEndSlider.slideTo(1);
                            console.log(finalSliderMove);
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
                  // TweenLite.to(slideWrapper, 3,{force3D:true,x: finalSliderMove,ease:Expo.easeInOut})
                  // reachThis.slideTo(1);
                  window.location.href = "http://www.gcreativelab.com/case/";
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


      }, // Home onComplete Barba Ends
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

        }
      
    });
    

    Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container) {



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

      $('#logo__holder').find('#logo__holder_loaded > svg').remove();

      var logoLoaded = {
        container: document.getElementById('logo__holder_loaded'),
        renderer: 'svg',
        loop: true,
        // yoyo: true,
        autoplay: true,
        path: 'http://www.gcreativelab.com/wp-content/themes/gcreativelab_v2/assets/images/bodymovin/logo_loading.json'
      };
      
      // http://www.gcreativelab.com/wp-content/themes/gcreativelab_v2/assets/images/bodymovin/logo_loading.json

      var xspan = document.getElementById("logo__holder_loaded");
      
      if (xspan.getElementsByTagName('svg').length) {
        console.log('svg already added.');
      }else{
        var animLogoLoaded;
        animLogoLoaded = bodymovin.loadAnimation(logoLoaded);
      }
  
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

    
      onImagesLoaded(container, function() {
        
                    console.log("All the images have loaded");
                    

                    $el.animate({ opacity: 1 }, 400, function() {
                      /**
                       * Do not forget to call .done() as soon your transition is finished!
                       * .done() will automatically remove from the DOM the old Container
                       */
                      console.log('done');
                      
                      TweenLite.to('#logo__holder_loaded',1,{
                        top: 32,
                            left: 80,
                            width: '103px',
                            height: '115px',
                            ease: Expo.easeInOut, 
                      });

                      $('#logo__holder').find('#logo__holder_loaded > svg').remove();
                      
                            var logoLoaded = {
                              container: document.getElementById('logo__holder_loaded'),
                              renderer: 'svg',
                              loop: false,
                              // yoyo: true,
                              autoplay: true,
                              path: 'http://www.gcreativelab.com/wp-content/themes/gcreativelab_v2/assets/images/bodymovin/logo_loaded.json'
                            };
                            
                            var xspan = document.getElementById("logo__holder_loaded");
                            
                            if (xspan.getElementsByTagName('svg').length) {
                              console.log('svg already added.');
                            }else{
                              var animLogoLoaded;
                              animLogoLoaded = bodymovin.loadAnimation(logoLoaded);
                            }

                
                      _this.done();
                    });
                    
                    
        
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