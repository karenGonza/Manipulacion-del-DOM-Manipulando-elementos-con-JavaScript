function qs (element) {
    return document.querySelector(element)
}

let $main = qs('main');
let $h2 = qs('.subtitulo');
let $a = qs('a');
let $p = document.querySelectorAll('p');
let $body = qs('body')

let userName = prompt('Ingrese su nombre') || 'Invitad@';
$h2.innerHTML += `<a href="https://google.com">${userName.trim()}</a>`;
$h2.style.textTransform = 'uppercase';
$a.style.color = '#E51B3E';

let background = confirm('¿Desea colocar un fondo de pantalla?');

background && $body.classList.add('fondo');

for(let i=0; i < $p.length; i++){
    if(i % 2 == 0){
        $p[i].classList.add('destacadoPar');
    }else{
        $p[i].classList.add('destacadoImpar');
    }
}

/* $p.forEach((element, index) => {
    if((index + 1) % 2 == 0){
        element.classList.add('destacadoPar');
    }else{
        element.classList.add('destacadoImpar');
    }
} */


$main.style.display = "block"