
const express = require('express');

const router = express.Router();
const paymentController = require('./paymentController');

router.get('/', [], paymentController.get);
router.get('/:id', [], paymentController.getById);
router.post('/', [], paymentController.post);
router.delete('/:id', [], paymentController.remove);

module.exports = router;
