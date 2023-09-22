import frases from './dados.js';

function mensagemDia(dia) {
    return frases[dia - 1];
}

export default mensagemDia;