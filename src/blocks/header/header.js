const burgerButton = document.querySelector('.header__burger')
const messageButton = document.querySelector('.header__chat')
const callButton = document.querySelector('.header__call')

burgerButton.addEventListener('click', function () {
    document.querySelector('.side-menu').classList.add('side-menu--visible')
})

messageButton.addEventListener('click', function () {
    document.querySelector('.feedback').classList.add('feedback--visible')
})

callButton.addEventListener('click', function () {
    document.querySelector('.call').classList.add('call--visible')
})