const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { join } = require('path');
const sequelize = require('./modelos')

const usuario = require('./routers/usuario')
const local = require('./routers/local')
const quadra = require('./routers/quadra')
const recurso = require('./routers/recurso')
const quadraTipo = require('./routers/quadraTipo');

const port = 3000

const app = express()
app.use(cors())
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('API v1.0');
});

app.use('/usuarios', usuario);
app.use('/locais', local);
app.use('/quadras', quadra);
app.use('/recursos', recurso);
app.use('/quadra-tipos', quadraTipo);

sequelize.sync().then(async () => {

    app.listen(port, () => {
        console.log(`Servidor iniciado na porta ${port}`)
    })
});

// app.listen(port, () => {
//     console.log(`Servidor rodando na porta ${port}`)
// })
