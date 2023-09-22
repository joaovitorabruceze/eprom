import express from 'express';
import {calculaIcm,informaStatus,validaParametro} from './imc.js';

const app = express();

app.get ('/',(req,res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;
    let msgErro = '';

    if (validaParametro(peso) && validaParametro(altura)){
        let imc = calculaIcm(peso,altura);
        let status = informaStatus(imc);
        let imc_json = {
            imc: imc.toFixed(2), 
            status: status
        };
        res.json(imc_json);
    } else {
        if (!validaParametro(peso) && !validaParametro(altura)){
            msgErro = {'Erro':'Peso e altura inválidos!'};
        } else if (!validaParametro(peso) && validaParametro(altura)){
            msgErro = {'Erro':'Peso inválido!'};
        } else if (validaParametro(peso) && !validaParametro(altura)){
            msgErro = {'Erro':'Altura inválida!'};
        }
        res.status(400).json(msgErro);
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
})
