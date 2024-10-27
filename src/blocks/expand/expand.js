const brandsExpand = document.querySelector('#brands-expand')
const hiddenBrandsSlides = document.querySelectorAll('.slider__brands-slide:nth-child(n + 7)')

brandsExpand.onclick = function () {
    if (brandsExpand.children[1].textContent === 'Показать всё') {
        for (let i = 0; i < hiddenBrandsSlides.length; i++) {
            hiddenBrandsSlides[i].classList.add('slider__brands-slide--visible')
        }
        
        brandsExpand.style.marginTop = '46px'
        brandsExpand.style.marginBottom = '14px'
        brandsExpand.children[0].src = 'svg/hide.svg'
        brandsExpand.children[1].textContent = 'Скрыть'
    } else {
        for (let i = 0; i < hiddenBrandsSlides.length; i++) {
            hiddenBrandsSlides[i].classList.remove('slider__brands-slide--visible')
        }

        brandsExpand.style.marginTop = '24px'
        brandsExpand.style.marginBottom = '34px'
        brandsExpand.children[0].src = 'svg/expand.svg'
        brandsExpand.children[1].textContent = 'Показать всё'
    }
}

const repairExpand = document.querySelector('#repair-expand')
const hiddenRepairSlides = document.querySelectorAll('.slider__repair-slide:nth-child(n + 4)')

repairExpand.onclick = function () {
    if (repairExpand.children[1].textContent === 'Показать всё') {

        for (let i = 0; i < hiddenRepairSlides.length; i++) {
            hiddenRepairSlides[i].classList.add('slider__repair-slide--visible')
        }
        
        repairExpand.style.marginTop = '46px'
        repairExpand.style.marginBottom = '14px'
        repairExpand.children[0].src = 'svg/hide.svg'
        repairExpand.children[1].textContent = 'Скрыть'

    } else {

        for (let i = 0; i < hiddenRepairSlides.length; i++) {
            hiddenRepairSlides[i].classList.remove('slider__repair-slide--visible')
        }

        repairExpand.style.marginTop = '24px'
        repairExpand.style.marginBottom = '34px'
        repairExpand.children[0].src = 'svg/expand.svg'
        repairExpand.children[1].textContent = 'Показать всё'
    }
}