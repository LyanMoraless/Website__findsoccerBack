const express = require('express');
// const auth = require('../auth');
const QuadraTipo = require('../modelos/QuadraTipo');

const router = express.Router()
// router.use(auth);


router.get('/', (req, res) => {
    res.send(QuadraTipo.listar());
})

router.post('/', (req, res) => {
    let quadraTipo = new QuadraTipo().assign(req.body);
    quadraTipo.salvar();
    res.status(200).send(quadraTipo);
})

router.get('/:id', (req, res) => {
    res.send(QuadraTipo.consultar(req.params.id));
})

router.put('/:id', (req, res) => {
    let quadraTipo = QuadraTipo.consultar(req.params.id).assign(req.body);
    quadraTipo.salvar();
    res.send(quadraTipo);
})

router.delete('/:id', (req, res) => {
    QuadraTipo.consultar(req.params.id).excluir();
    res.status(200).send('OK');
})


module.exports = router