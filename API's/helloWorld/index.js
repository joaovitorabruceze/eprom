import express from 'express';

const app = express();

app.get ('/',(req,res) => {
    let msg = {mensagem: 'Olá, Mundo!'}
    res.json(msg);
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
})
