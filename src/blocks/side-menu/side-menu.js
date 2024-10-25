const concealingLayer = document.querySelector('.concealing-layer')
const sideMenu = document.querySelector('.side-menu')
const closeButton = sideMenu.querySelector('.side-menu__header-close')
const callButton = sideMenu.querySelector('.side-menu__footer-call')
const feedbackButton = sideMenu.querySelector('.side-menu__footer-feedback')
const callSection = document.querySelector('.call')
const feedbackSection = document.querySelector('.feedback')

closeButton.addEventListener('click', function () {
    sideMenu.classList.remove('side-menu--visible')
    concealingLayer.classList.remove('concealing-layer--active')
})

callButton.addEventListener('click', function () {
    sideMenu.classList.remove('side-menu--visible')
    feedbackSection.classList.remove('feedback--visible')
    concealingLayer.classList.add('concealing-layer--active')
    callSection.classList.add('call--visible')
})

feedbackButton.addEventListener('click', function () {
    sideMenu.classList.remove('side-menu--visible')
    callSection.classList.remove('call--visible')
    concealingLayer.classList.add('concealing-layer--active')
    feedbackSection.classList.add('feedback--visible')
})