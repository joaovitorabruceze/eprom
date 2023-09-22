import express from 'express';
import mensagemDia from './mensagemDia.js';

const app = express();
let data = new Date();

app.get ('/',(req,res) => {
    let dia = data.getDate();
    let msgDia = mensagemDia(dia);
    let msg = {mensagem: msgDia}
    res.json(msg);
});

app.listen(8080, () => {
    console.log('Servidor node iniciado em: ' + data);
})
