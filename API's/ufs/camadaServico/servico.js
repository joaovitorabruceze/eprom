import colecaoUf from '../dados/dados.js';

function buscaTodos(){
    return colecaoUf;
}

function buscaPorId(id) {
    return colecaoUf.find(uf => uf.id === id);
}

const buscaPorNome = (str) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(str.toLowerCase()));
};

function validaId(id) {
    return id >= 1 && id <= 27;
}

export {buscaTodos,buscaPorId,buscaPorNome,validaId};