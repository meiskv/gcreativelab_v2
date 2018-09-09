(function( $ ) {
    
    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
    // import { TimelineMax } from "gsap";
    // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
    
        
var Aboutpage = Barba.BaseView.extend({
namespace: 'aboutpage',
onEnter: function() {
    // The new Container is ready and attached to the DOM.

    var aboutHeight = $('.about-container .swiper-slide');
    let $wwCh = window.innerHeight;
    TweenMax.set(aboutHeight,{height: $wwCh});

    var menuHeight = $('.menu');
    TweenMax.set(menuHeight,{height: $wwCh});
    

    var pagePagination = $('.page__pagination');
    TweenMax.set(pagePagination,{height: $wwCh});
    // var aboutHeight = $('#exactMapSvg');



    const xasd = new TimelineMax({onComplete: completeX});
    
    
        xasd.to('.content-about .content__header',0.5,{x: 1});
    
        function completeX(){
            console.log('XCOmplete');
        }
     

        var svgLoadedHolder = document.querySelector('#logo__holder');
        var svgLoadedHolderLoaded = "<div id='logo__holder_loaded'></div>";

        

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
            window.location.href = window.location.href;
        },
    }
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


    var aboutSlider = new Swiper('.about-container', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        mousewheel: true,
        freeMode: true,
        infinite: true,
        mousewheelSensitivity: 0.02,
        freeModeFluid: true,
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
    
                if($wwCh<=415){
    
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

Aboutpage.init();
Barba.Prefetch.init();



})( jQuery );
