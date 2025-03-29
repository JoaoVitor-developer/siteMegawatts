let count = 1
document.getElementById('radio1').checked = true;

setInterval( function() {
    nextImage();
}, 5000)

function nextImage() {
    count ++
    if (count > 3) {
        count = 1
    }
    document.getElementById('radio' + count).checked = true;
}

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