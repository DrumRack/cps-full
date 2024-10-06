const expand = document.querySelector('.expand')
const hiddenSlides = document.querySelectorAll('.slider__slide:nth-child(n+7)')

expand.onclick = function () {
    if (expand.children[1].textContent === 'Показать всё') {

        for (let i = 0; i < hiddenSlides.length; i++) {
            hiddenSlides[i].classList.add('slider__slide--visible')
        }
        
        expand.style.marginTop = '46px'
        expand.style.marginBottom = '14px'
        expand.children[0].src = 'svg/hide.svg'
        expand.children[1].textContent = 'Скрыть'

    } else {

        for (let i = 0; i < hiddenSlides.length; i++) {
            hiddenSlides[i].classList.remove('slider__slide--visible')
        }

        expand.style.marginTop = '24px'
        expand.style.marginBottom = '34px'
        expand.children[0].src = 'svg/expand.svg'
        expand.children[1].textContent = 'Показать всё'
    }
}