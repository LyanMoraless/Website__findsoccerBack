const express = require('express');
// const auth = require('../auth');
const Quadra = require('../modelos/Quadra');

const router = express.Router()
// router.use(auth);


router.get('/', (req, res) => {
    res.send(Quadra.listar());
})

router.post('/', (req, res) => {
    let quadra = new Quadra().assign(req.body);
    quadra.salvar();
    res.status(200).send(quadra);
})

router.get('/:id', (req, res) => {
    res.send(Quadra.consultar(req.params.id));
})

router.put('/:id', (req, res) => {
    let quadra = Quadra.consultar(req.params.id).assign(req.body);
    quadra.salvar();
    res.send(quadra);
})

router.delete('/:id', (req, res) => {
    Quadra.consultar(req.params.id).excluir();
    res.status(200).send('OK');
})

module.exports = router