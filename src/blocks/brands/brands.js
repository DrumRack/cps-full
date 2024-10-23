import Swiper from 'swiper'
import {Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const brandsSectionStyle = document.querySelector('.brands').style

const swiper = new Swiper('.brands__slider', {
    breakpoints: {
        768: {
            enabled: false
        }
    },
    modules: [Pagination],
    on: {
        reachEnd: () => {
            brandsSectionStyle.setProperty('--gradient-background-after', 'none')
            brandsSectionStyle.paddingRight = '16px'
        },
        slideChange: () => {
            if (swiper.activeIndex !== swiper.slides.length) {
                brandsSectionStyle.setProperty('--gradient-background-after', 'var(--gradient-background-right)')
                brandsSectionStyle.paddingRight = 0
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