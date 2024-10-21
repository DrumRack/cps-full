const burgerButton = document.querySelector('.header__burger')
const messageButton = document.querySelector('.header__chat')
const callButton = document.querySelector('.header__call')

burgerButton.addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.add('mobile-menu--visible')
})

messageButton.addEventListener('click', function () {
    document.querySelector('.feedback').classList.add('feedback--visible')
})

callButton.addEventListener('click', function () {
    document.querySelector('.call').classList.add('call--visible')
})