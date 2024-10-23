import Swiper from 'swiper'
import {Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const repairSectionStyle = document.querySelector('.repair').style

const swiper = new Swiper('.repair__slider', {
    breakpoints: {
        768: {
            enabled: false
        }
    },
    modules: [Pagination],
    on: {
        reachEnd: () => {
            repairSectionStyle.setProperty('--gradient-background-after', 'none')
            repairSectionStyle.paddingRight = '16px'
        },
        slideChange: () => {
            if (swiper.activeIndex !== swiper.slides.length) {
                repairSectionStyle.setProperty('--gradient-background-after', 'var(--gradient-background-right)')
                repairSectionStyle.paddingRight = 0
            }
        }
    },
    pagination: {
        el: '.slider__pagination'
    },
    slidesPerView: 'auto'
})

window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
        swiper.slideTo(0, {
            animate: false
        })
    }
})