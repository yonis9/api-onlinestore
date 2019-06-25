const Order = require('../models/order');

const handleOrders = (req, res ) => {
    const { id } = req.body.user;
    Order.find({user: id}, (err, result) => {
        if (err) {
            console.log(err)
        } if (result) {
           const orderArray = result.map(order =>{
            return  {date: order.date, cart: order.cart, totalPrice: order.cart.totalPrice}
            })
           res.json(orderArray)
        }
    })
}

module.exports = {
    handleOrders
}