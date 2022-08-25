const express = require('express');
const { getAllUsuarios, getOneUsuario, insertUsuario, updateUsuario, deleteUsuario } = require('../controller/usuario')

const router = express.Router();

router.get('/', getAllUsuarios);
router.get('/:id', getOneUsuario);
router.post('/', insertUsuario);
router.post('/:id', updateUsuario);
router.post('/:id', deleteUsuario);

module.exports = router