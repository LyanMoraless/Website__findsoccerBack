const express = require('express');
const { getAllQuadras, getOneQuadra, insertQuadra, updateQuadra, deleteQuadra  } = require('../controller/quadra')

const router = express.Router();

router.get('/', getAllQuadras);
router.get('/:id', getOneQuadra);
router.post('/', insertQuadra);
router.post('/:id', updateQuadra);
router.delete('/:id', deleteQuadra);

module.exports = router