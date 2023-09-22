import express from 'express';
import {converteTemperatura,validaTemperatura,validaConversor} from './conversorTemperatura.js';

const app = express();

app.get ('/',(req,res) => {
    let temperatura = req.query.temperatura;
    let conversor = req.query.conversor;
    let msgErro = '';

    if (validaTemperatura(temperatura) && validaConversor(conversor.toLocaleUpperCase())){
        let resultado = converteTemperatura(temperatura,conversor.toLocaleUpperCase());
        let temperatura_json = {
            temperatura: resultado
        };
        res.json(temperatura_json);
    } else {
        if (!validaTemperatura(temperatura) && !validaConversor(conversor)){
            msgErro = {'Erro':'Temperatura e conversor inválidos!'};
        } else if (!validaTemperatura(temperatura) && validaConversor(conversor)){
            msgErro = {'Erro':'Temperatura inválida!'};
        } else if (validaTemperatura(temperatura) && !validaConversor(conversor)){
            msgErro = {'Erro':'Conversor inválido!'};
        }
        res.status(400).json(msgErro);
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
})
