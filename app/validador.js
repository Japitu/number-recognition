function verificarValorChuteValido (chute) {
    const numero = +chute;

    if(numeroForInvalido(numero)){
        caixa.innerHTML += `<div>Valor Inválido</div>`;
        return;
    }

    if(numeroDentroDoLimite(numero)){
        caixa.innerHTML += `
        <div>Valor Inválido:</div>
        <div>Fale um número entre ${lowerNumber} e ${higherNumber}</div>
        `;
        return;
    }

    if(numero === secretNumber){
        document.body.innerHTML = `
            <h2>Você Acertou!!!</h2>
            <h3>O número secreto era ${secretNumber}</h3>

            <button id="jogar-novamente" class="btn-jogar"> Jogar novamente </button>
        `
    } else if (numero > secretNumber) {
        caixa.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-circle-down"></i></div>
        `
    } else {
        caixa.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-circle-up"></i></div>
        `
    }

}

function numeroForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroDentroDoLimite(numero){
    return numero > higherNumber || numero < lowerNumber;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})