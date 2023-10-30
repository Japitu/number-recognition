const lowerNumber = 1;
const higherNumber = 100;

const menorNumeroElemento = document.querySelector('#menor-valor');
const maiorNumeroElemento = document.querySelector('#maior-valor');

const secretNumber = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random()*higherNumber + 1);
}

console.log(secretNumber);

menorNumeroElemento.textContent = lowerNumber;
maiorNumeroElemento.textContent = higherNumber;