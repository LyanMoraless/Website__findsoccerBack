const express = require('express');
const { getAllLocals, getOneLocal, insertLocal, updateLocal, deleteLocal  } = require('../controller/local')

const router = express.Router();

router.get('/', getAllLocals);
router.get('/:id', getOneLocal);
router.post('/', insertLocal);
router.post('/:id', updateLocal);
router.post('/:id', deleteLocal);

module.exports = router