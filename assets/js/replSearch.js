///replace

var elem = document.querySelector('#replace');
elem.addEventListener('click', replacement);

function replacement() {
    var inp = document.querySelector('#replace');
    inp.innerHTML = '<input class="from-control" placeholder="Введіть Ваш запит" id="searchTerm">';
    var btnVsb = document.querySelector('#search');
    btnVsb.style.cssText = 'visibility: visible;'
}