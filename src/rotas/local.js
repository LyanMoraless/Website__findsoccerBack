const express = require('express');
// const auth = require('../auth');
const Local = require('../modelos/Local');

const router = express.Router()
// router.use(auth);


router.get('/', (req, res) => {
    res.send(Local.listar());
})

router.post('/', (req, res) => {
    let local = new Local().assign(req.body);
    local.salvar();
    res.status(200).send(local);
})

router.get('/:id', (req, res) => {
    res.send(Local.consultar(req.params.id));
})

router.put('/:id', (req, res) => {
    let local = Local.consultar(req.params.id).assign(req.body);
    local.salvar();
    res.send(local);
})

router.delete('/:id', (req, res) => {
    Local.consultar(req.params.id).excluir();
    res.status(200).send('OK');
})


module.exports = router