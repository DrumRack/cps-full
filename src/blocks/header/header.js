const concealingLayer = document.querySelector('.concealing-layer')
const sideMenu = document.querySelector('.side-menu')
const burgerButton = document.querySelector('.header__burger')
const callButton = document.querySelector('.header__call')
const feedbackButton = document.querySelector('.header__feedback')
const callSection = document.querySelector('.call')
const feedbackSection = document.querySelector('.feedback')

burgerButton.addEventListener('click', function () {
    callSection.classList.remove('call--visible')
    feedbackSection.classList.remove('feedback--visible')
    concealingLayer.classList.add('concealing-layer--active')
    sideMenu.classList.add('side-menu--visible')
})

callButton.addEventListener('click', function () {
    concealingLayer.classList.add('concealing-layer--active')
    callSection.classList.add('call--visible')
})

feedbackButton.addEventListener('click', function () {
    concealingLayer.classList.add('concealing-layer--active')
    feedbackSection.classList.add('feedback--visible')
})