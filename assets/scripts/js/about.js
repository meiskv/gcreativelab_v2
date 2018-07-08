console.clear();
        
var Aboutpage = Barba.BaseView.extend({
namespace: 'aboutpage',
onEnter: function() {
    // The new Container is ready and attached to the DOM.
    console.log('about onEnter');
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
Barba.Pjax.start();
  