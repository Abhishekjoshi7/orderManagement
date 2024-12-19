const orderService = require('../services/orderService');

exports.createOrder = (req, res) => {
    const { orderId, products } = req.body;
    try {
        const order = orderService.createOrder(orderId, products);
        res.status(201).send(order);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.confirmOrder = (req, res) => {
    const { orderId } = req.params;
    try {
        const order = orderService.confirmOrder(orderId);
        res.status(200).send(order);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
