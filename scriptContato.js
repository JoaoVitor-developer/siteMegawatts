var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')
var ppaImg = document.getElementById('ppa-imagem')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expadir')

    if (ppaImg.style.visibility === 'hidden') {
        ppaImg.style.visibility = 'visible'
    } else {
        ppaImg.style.visibility = 'hidden'
    }
});