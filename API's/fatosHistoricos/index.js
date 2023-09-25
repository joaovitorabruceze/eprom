import express from 'express';
import {fatoPorAno,validaAno} from './servico.js';

const app = express();
let data = new Date();

app.get ('/',(req,res) => {
    let ano = req.query.ano;
    let msgErro = '';

    if (validaAno(ano)){
        let fato = fatoPorAno(ano);
        res.json({
            fato: fato,
            ano: ano
        });
    }
    else {
        msgErro = {'Erro':'Parâmetro ano inválido!'};
        res.status(400).json(msgErro);
    }
});

app.listen(8080, () => {
    console.log('Servidor node iniciado em: ' + data);
})
