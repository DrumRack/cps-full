const concealingLayer = document.querySelector('.concealing-layer')
const closeButton =  document.querySelector('.call__close')
const callSection = document.querySelector('.call')

closeButton.addEventListener('click', function () {
    callSection.classList.remove('call--visible')
    concealingLayer.classList.remove('concealing-layer--active')
})