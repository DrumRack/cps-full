const swiper = new Swiper('.services__slider', {
    breakpoints: {
        768: {
            enabled: false
        }
    },
    pagination: {
        el: '.slider__pagination'
    },
    slidesPerView: 'auto'
})

addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
        swiper.slideTo(0, {
            animate: false
        })
    }
})