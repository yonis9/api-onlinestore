const Product = require('../models/product');
const Cart = require('../models/cart');


const handleRemoveItem = (req, res) => {
    const productId = req.params.id;
    const cart =  new Cart(req.body.cart);
    Product.findById(productId, (err, product) => {
        if(err) { 
            console.log(err)
        }
        cart.remove(product, product.id);
        res.json(cart)
    })
}

module.exports = {
    handleRemoveItem
}