import fatosHistoricos from './dados.js';

function fatoPorAno(ano) {
    let fatoHistorico = fatosHistoricos.find(linha => {
            return linha.ano == ano
    })
    return fatoHistorico.fato;
}

function validaAno(ano) {
/*   
    if(isNaN(ano))
        return false;
    else{
        if(ano >= 1920 && ano <= 2020)
            return true;
        else
            return false;
    }
*/
    return ano >= 1920 && ano <= 2020;
}

export {fatoPorAno,validaAno};