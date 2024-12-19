const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');

router.post('/create', orderController.createOrder);
router.post('/confirm/:orderId', orderController.confirmOrder);

module.exports = router;
