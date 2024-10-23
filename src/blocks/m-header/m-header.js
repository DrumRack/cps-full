const closeButton = document.querySelector('.m-header__close')

closeButton.addEventListener('click', function () {
    document.querySelector('.side-menu').classList.remove('side-menu--visible')
})