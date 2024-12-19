const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoute');
const orderRoutes = require('./routes/orderRoute');

const app = express();
app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
