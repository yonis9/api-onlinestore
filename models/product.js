const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSechema = new Schema({
    imagePath: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
    
});

module.exports = mongoose.model('Product', ProductSechema);