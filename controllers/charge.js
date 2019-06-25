const stripe = require("stripe")(process.env.STRIPE_SK_KEY);
const Order = require('../models/order');

const handleCharge = (req, res) => {
    const { chargeToken, cart, user, name,  address,city } = req.body;
    if(!user.id) {
        res.json({msg: 'You should be loggen in in order to make a purchase'})
    } else {

        stripe.charges.create({
            amount: req.body.amount * 100,
            currency: "usd",
            description: "An example charge",
            source: chargeToken
          }).then(charge => {
              
          const order = new Order({
               user: user.id, cart, name, address, city, paymentId: charge.id
              
          });
          order.save((err, result) => {
              if(err) {console.log(err)}
              res.json(charge.status)
          })
          })
          .catch(err => {console.log(err)
              res.status(500).json({err})})
  
    }
    }

    module.exports = {
        handleCharge
    }