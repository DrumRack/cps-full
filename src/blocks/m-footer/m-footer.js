const messageButton =  document.querySelector('.m-footer__chat')
const callButton = document.querySelector('.m-footer__call')

messageButton.addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.remove('mobile-menu--visible')
    document.querySelector('.feedback').classList.add('feedback--visible')
})

callButton.addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.remove('mobile-menu--visible')
    document.querySelector('.call').classList.add('call--visible')
})