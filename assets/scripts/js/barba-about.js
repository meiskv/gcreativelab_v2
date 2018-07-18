(function( $ ) {
    
    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
    // import { TimelineMax } from "gsap";
    // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
    
        
var Aboutpage = Barba.BaseView.extend({
namespace: 'aboutpage',
onEnter: function() {
    // The new Container is ready and attached to the DOM.

    const xasd = new TimelineMax({onComplete: completeX});
    
    
        xasd.to('.content-about .content__header',0.5,{x: 1});
    
        function completeX(){
            console.log('XCOmplete');
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
                    if (slider.activeIndex === 0) {
                      menuButton.classList.add('cross');
                      let src = 'http://www.gcreativelab.com/wp-content/themes/gcreativelab_v2/assets/images/gcreative_logo_white.svg';
                      $('.glogo').attr('src', src);
                      TweenMax.staggerFromTo('#menu li a', 0.1,{x: '-140',autoAlpha:0},{x: '0',autoAlpha:1, ease:Power4.easeInOut}, 0.1);
                    } else {
                      menuButton.classList.remove('cross');
                      let src = 'http://www.gcreativelab.com/wp-content/themes/gcreativelab_v2/assets/images/gcreative_logo.svg';
                      $('.glogo').attr('src', src);
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
