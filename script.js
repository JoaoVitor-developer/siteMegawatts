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

//------------------------------------------------------------------

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')
var logoHeader01 = document.getElementById('logo-header-01')

    btnExp.addEventListener('click', function(){
        menuSide.classList.toggle('expadir')
        logoHeader01.style.visibility = 'hidden'
        
        btnExp.addEventListener('click', function () {
            logoHeader01.style.visibility = 'visible'
        })
});