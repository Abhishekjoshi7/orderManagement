const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/add', productController.addProduct);
router.get('/stock/:productId', productController.getStock);

module.exports = router;
