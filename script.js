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

//------------------------------------------------------------------

var menuItem = document.querySelectorAll('.item-menu')

function selectLink() {
    menuItem.forEach((item) => 
        item.classList.remove('ativo'))
    this.classList.add('ativo')
}

menuItem.forEach((item) => 
    item.addEventListener('click', selectLink)
)

// -----------------------------------------------------------------

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

// -----------------------------------------------------------------
