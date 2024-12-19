const productService = require('../services/productService');

exports.addProduct = (req, res) => {
    const { productId, quantity } = req.body;
    try {
        productService.addProduct(productId, quantity);
        res.status(200).send({ message: 'Product added successfully' });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.getStock = (req, res) => {
    const { productId } = req.params;
    const stock = productService.getStock(productId);
    res.status(200).send({ productId, stock });
};
