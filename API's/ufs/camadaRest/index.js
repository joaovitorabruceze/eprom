import express from 'express';
import {buscaPorId, buscaPorNome, buscaTodos, validaId} from '../camadaServico/servico.js';

const app = express();
let data = new Date();
let msgErro = '';

app.get ('/ufs',(req,res) => {
    
    const string_busca = req.query.string_busca;
    let resultado = string_busca ? buscaPorNome(string_busca) : buscaTodos();
    if (resultado.length > 0)
        res.json(resultado);
    else{
        msgErro = {'Erro':'Nenhuma UF encontrada!'};
        res.status(404).json(msgErro);
    }
});

app.get ('/ufs/:id',(req,res) => {
    let id = parseInt(req.params.id);
    let estado = buscaPorId(id);

    if (validaId(id)){ 
        res.json(estado);
    }
    else if (isNaN(id)){
        msgErro = {'Erro':'Requisição inválida!'};
        res.status(404).json(msgErro);
    }
    else{
        msgErro = {'Erro':'Id inexistente, UF não encontrado!'};    
        res.status(404).json(msgErro);
    }
});

app.listen(8080, () => {
    console.log('Servidor node iniciado em: ' + data);
});
