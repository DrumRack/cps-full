const closeButton =  document.querySelector('.call__close')

closeButton.addEventListener('click', function () {
    document.querySelector('.call').classList.remove('call--visible')
})