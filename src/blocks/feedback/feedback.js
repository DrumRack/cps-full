const concealingLayer = document.querySelector('.concealing-layer')
const closeButton =  document.querySelector('.feedback__close')
const feedbackSection = document.querySelector('.feedback')

closeButton.addEventListener('click', function () {
    feedbackSection.classList.remove('feedback--visible')
    concealingLayer.classList.remove('concealing-layer--active')
})