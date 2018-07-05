var caseInner = new Swiper('.case-inner-slide-container', {
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