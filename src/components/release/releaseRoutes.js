
const express = require('express');

const router = express.Router();
const releaseController = require('./releaseController');

router.get('/', [], releaseController.get);
router.get('/:id', [], releaseController.getById);
router.post('/', [], releaseController.post);
router.put('/:id', [], releaseController.put);
router.delete('/:id', [], releaseController.remove);

module.exports = router;
