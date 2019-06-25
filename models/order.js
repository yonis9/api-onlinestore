const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSechema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    cart: {type: Object, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    name: {type: String, required: true},
    paymentId: {type: String, required: true},
    date: {type: String, default: new Date().toDateString()}
    
    
});

module.exports = mongoose.model('Order', OrderSechema);