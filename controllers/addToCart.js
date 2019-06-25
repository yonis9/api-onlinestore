const Product = require('../models/product');
const Cart = require('../models/cart');

const handleAddToCart = (req, res) => {
    const productId = req.params.id;
const cart =  new Cart(req.body.cart)
Product.findById(productId, (err, product) => {
    if(err) { 
        console.log(err)
    }
    cart.add(product, product.id);
    res.json(cart)
})
}

module.exports = {
    handleAddToCart
}