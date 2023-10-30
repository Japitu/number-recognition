window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const caixa = document.querySelector('#chute');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
  const chute = e.results[0][0].transcript
  exibeChuteNaTela(chute);
  verificarValorChuteValido(chute);
}

function exibeChuteNaTela(chute) {
  caixa.innerHTML = `
  <div>Você disse:</div>
  <span class="box">${chute}</span>
  `
}

recognition.addEventListener('end', () => recognition.start());