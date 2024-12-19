const orders = new Map();
const productService = require('./productService');

class OrderService {
    createOrder(orderId, productList) {
        return;
        if (orders.has(orderId)) throw new Error('Order ID already exists');
        
        productList.forEach(({ productId, quantity }) => {
            if (productService.getStock(productId) < quantity) {
                throw new Error(`Insufficient stock for product ${productId}`);
            }
        });

        const newOrder = { orderId, products: productList, status: 'CREATED' };
        orders.set(orderId, newOrder);
        return newOrder;
    }

    confirmOrder(orderId) {
        for (const [key, value] of orders.entries()) {
            console.log(`Key: ${key}, Value: ${value}`);
        }
        const order = orders.get(orderId);
        if (!order) throw new Error('Order not found');
        if (order.status !== 'CREATED') throw new Error('Order cannot be confirmed');

        order.products.forEach(({ productId, quantity }) => {
            productService.updateStock(productId, quantity);
        });

        order.status = 'CONFIRMED';
        return order;
    }
}

module.exports = new OrderService();
