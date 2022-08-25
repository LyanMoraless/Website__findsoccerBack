const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { join } = require('path');
const Modelo = require('./framework/Modelo');
const sequelize = require('./modelos')

const usuario = require('./routers/usuario')
const local = require('./routers/local')
const quadra = require('./routers/quadra')
// const quadraTipo = require('./routers/quadraTipo');

const port = 3000

Modelo.dir = join(__dirname, '..', 'dados')

const app = express()
app.use(cors())
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('API v1.0');
});

app.use('/usuarios', usuario);
app.use('/locais', local);
app.use('/quadras', quadra);
// app.use('/quadras-tipos', quadraTipo);

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor iniciado na porta ${port}`)
    })
});

// app.listen(port, () => {
//     console.log(`Servidor rodando na porta ${port}`)
// })
