const closeButton =  document.querySelector('.feedback__close')

closeButton.addEventListener('click', function () {
    document.querySelector('.feedback').classList.remove('feedback--visible')
})