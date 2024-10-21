import Swiper from 'swiper'
import {Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const swiper = new Swiper('.prices__slider', {
    breakpoints: {
        768: {
            enabled: false
        }
    },
    modules: [Pagination],
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

document.addEventListener('DOMContentLoaded', addTH)
window.addEventListener('resize', addTH)
window.addEventListener('resize', removeTH)

function addTH() {
    if (window.matchMedia('(max-width: 767px)').matches && !document.querySelector('.col-service-text').children.length) {
        const slide = document.querySelectorAll('.slider__prices-slide')
        const colService = document.querySelector('.col-service')
        const colPrice = document.querySelector('.col-price')
        const colDeadline = document.querySelector('.col-deadline')
    
        for (let i = 0; i < slide.length; i++) {
            const colServiceClone = colService.cloneNode(true)
            const colPriceClone = colPrice.cloneNode(true)
            const colDeadlineClone = colDeadline.cloneNode(true)
            
            document.querySelectorAll('.col-service-text')[i].prepend(colServiceClone)
            document.querySelectorAll('.col-price-text')[i].prepend(colPriceClone)
            document.querySelectorAll('.col-deadline-text')[i].prepend(colDeadlineClone)
        }
    }
}

function removeTH() {
    if (window.matchMedia('(min-width: 768px)').matches) {
        const colService = document.querySelectorAll('tbody .col-service')
        const colPrice = document.querySelectorAll('tbody .col-price')
        const colDeadline = document.querySelectorAll('tbody .col-deadline')
        
        if (colService) {
            for (let i = 0; i < colService.length; i++) {
                if (colService[i]) colService[i].remove()
            }
        }

        if (colPrice) {
            for (let i = 0; i < colPrice.length; i++) {
                if (colPrice[i]) colPrice[i].remove()
            }
        }

        if (colDeadline) {
            for (let i = 0; i < colDeadline.length; i++) {
                if (colDeadline[i]) colDeadline[i].remove()
            }
        }
    }
}