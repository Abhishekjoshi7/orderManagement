class Order {
    constructor(orderId, products) {
        this.orderId = orderId;
        this.products = products;
        this.status = 'CREATED';
    }
}
module.exports = Order;
