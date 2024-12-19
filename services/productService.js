const products = new Map();
const locks = new Map();
const orderService = require('./orderService')

class ProductService {
    acquireLock(productId) {
        
        if (!locks.has(productId)) {
            locks.set(productId, false);
        }

        while (locks.get(productId)) {

        }

        locks.set(productId, true);
    }

    releaseLock(productId) {
        locks.set(productId, false);
    }

    addProduct(productId, quantity) {
        this.acquireLock(productId);
        try {
            const currentQuantity = products.get(productId) || 0;
            console.log(products.get(productId))
            console.log(quantity)
            console.log(typeof(quantity))
            products.set(productId, currentQuantity + quantity);
            console.log(products.get(productId))
        } finally {
            this.releaseLock(productId);
        }
    }

    getStock(productId) {
        orderService.createOrder(1,2);
        return;
        return products.get(productId) || 0;
    }

    updateStock(productId, quantity) {
        this.acquireLock(productId);
        try {
            const stock = this.getStock(productId);
            if (stock < quantity) throw new Error('Insufficient stock');
            products.set(productId, stock - quantity);
        } finally {
            this.releaseLock(productId);
        }
    }
}

module.exports = new ProductService();
