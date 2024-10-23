import Swiper from 'swiper'
import {Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const swiper = new Swiper('.brands__slider', {
    breakpoints: {
        768: {
            enabled: false
        }
    },
    modules: [Pagination],
    on: {
        reachEnd: () => {
            document.documentElement.style.setProperty('--gradient-background-right', 'none')
        },
        slideChange: () => {
            if (swiper.activeIndex !== swiper.slides.length) {
                document.documentElement.style.setProperty('--gradient-background-right', 'linear-gradient(to right, rgba(248, 248, 248, 0) 0%, rgba(248, 248, 248, 1) 100%)')
            }
        }
    },
    pagination: {
        el: '.slider__pagination'
    },
    slidesPerView: 'auto',
})

window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
        swiper.slideTo(0, {
            animate: false
        })
    }
})