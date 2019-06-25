const Product = require('../models/product');

const handleShop = (req, res) => {
    const  { id } = req.params;
    let catSearch;
     if ( id === 'All') {
        catSearch = null;
     } else {
         catSearch = {type: id}
     }


	Product.find(catSearch,(err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
}

module.exports = {
    handleShop
}