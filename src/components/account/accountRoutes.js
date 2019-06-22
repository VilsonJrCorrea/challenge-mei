
const express = require('express');

const router = express.Router();
const accountController = require('./accountController');

router.get('/', [], accountController.get);
router.get('/:id', [], accountController.getById);
router.post('/', [], accountController.post);
router.put('/:id', [], accountController.put);
router.delete('/:id', [], accountController.remove);

module.exports = router;
