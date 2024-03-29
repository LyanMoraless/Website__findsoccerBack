const express = require('express');
const { getAll, getOne, insert, update, remove  } = require('../controller/quadraTipo')

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', insert);
router.post('/:id', update);
router.delete('/:id', remove);

module.exports = router