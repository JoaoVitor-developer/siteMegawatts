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

var menuItem = document.querySelectorAll('.item-menu')

function selectLink() {
    menuItem.forEach((item) => 
        item.classList.remove('ativo'))
    this.classList.add('ativo')
}

menuItem.forEach((item) => 
    item.addEventListener('click', selectLink)
)