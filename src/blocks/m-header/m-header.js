const closeButton = document.querySelector('.m-header__close')

closeButton.addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.remove('mobile-menu--visible')
})