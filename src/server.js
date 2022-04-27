const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {join} = require('path')
const Modelo = require('./framework/Modelo')

// const usuarios = require('./rotas/usuarioRotas')
const local = require('./rotas/local')
const quadra = require('./rotas/quadra')
const quadraTipo = require('./rotas/quadraTipo')

const port = 3000

Modelo.dir = join(__dirname, '..', 'dados')

const app = express()
app.use(cors())
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('API v1.0');
});

// app.use('/usuarios', usuarios);
app.use('/locais', local);
app.use('/quadras', quadra);
app.use('/quadras-tipos', quadraTipo);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
