(function( $ ) {
    
    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
      
    // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
    window.requestAnimationFrame(function() {

        var caseinnerpage = Barba.BaseView.extend({
          namespace: 'caseinnerpage',
          onEnter: function() {
              // The new Container is ready and attached to the DOM.
              
              var svgLoadedHolder = document.querySelector('#logo__holder');
              var svgLoadedHolderLoaded = "<div id='logo__holder_loaded'></div>";

              var caseHeight = $('.case-inner-slide-container .swiper-slide');
              let $wwCh = window.innerHeight;
              TweenMax.set(caseHeight,{height: $wwCh});

              var menuHeight = $('.menu');
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
                      let resizeThis = this;
                      window.location.href = window.location.href;
                  }
                }
              });
      
              swiper.update()
      

              var caseInner = new Swiper('.case-inner-slide-container', {
                direction: 'horizontal',
                slidesPerView: 'auto',
                mousewheel: true,
                freeMode: true,
                // infinite: true,
                mousewheelSensitivity: 0.02,
                freeModeFluid: true,
                parallax: true,
                freeModeMomentumVelocityRatio: 0.5,
               on:{
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
  
                  if($wwCh<=414){
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
                  
                    
                  // if(transEndSlider.getTranslate()-50>=finalSliderMove){
                  //    TweenLite.to(slideWrapper, 1.5,{force3D:true,x: finalSliderMove,ease:Back.easeInOut})
                  //    transEndSlider.slideTo(1);
                  // }
                
  
                }
               }
            });
            
            // let caseWrapper = document.querySelector('.case-inner-slide-container');
            // let caseWrapperScroll = $('.case-inner-slide-container > .swiper-wrapper');
            // let scrollTime = 1.3;
            // let scrollDistance = 250;
            // var scrollCount = 1;
            
            // function pullBack (){
              
            //   // let finalVal = $(caseWrapperScroll).scrollLeft() - (scrollDistance * scrollCount);
            //   // console.log(finalVal2)
              

            //   let finalVal2 = Math.min(Math.max(parseInt($(caseWrapperScroll).scrollLeft() - (scrollDistance * scrollCount)), -caseInner.snapGrid[6]), 0);;
            //   // console.log(finalVal2)
            //   TweenMax.to(caseWrapperScroll,scrollTime,{
            //     x: finalVal2,
            //     force3D: true,
            //     ease: Power1.easeOut,
            //   })
            // }

         
            

            // caseWrapper.addEventListener('wheel', function(e){

            //   // scrollCount = Math.min(Math.max(parseInt(1), 0), 200);

            //   if(e.wheelDelta<0){
            //     if(caseInner.getTranslate()>=-caseInner.snapGrid[6]){
            //       scrollCount++;
            //       pullBack();
            //       console.log(scrollCount);
            //     }
                  
                
            //   }else if(e.wheelDelta>0){
            //     if(caseInner.getTranslate()<=0){
            //         if(scrollCount>0){
            //           scrollCount--;
            //           pullBack();
            //         } 
            //     }
            //   }

            // });

          

             
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