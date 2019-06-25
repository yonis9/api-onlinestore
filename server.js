const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const bodyParser = require('body-parser');
const validatior = require('express-validator');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const addToCart = require('./controllers/addToCart');
const removeItemCart = require('./controllers/removeItemCart');
const shop = require('./controllers/shop');
const charge = require('./controllers/charge');
const orders = require('./controllers/orders');
require('dotenv').config()

const app = express();


const mongooseKey = process.env.MONGOOSE_KEY;
mongoose.connect(`mongodb+srv://${mongooseKey}@onlineshop-teodb.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true } )


app.use(cors())
app.use(cookieParser());

  
app.use(bodyParser.json());
app.use(require("body-parser").text());
app.use(validatior())


app.post('/register',  (req, res) => { register.handleRegister(req, res) })

app.post('/signin', (req, res) => { signin.handleSignin(req, res) })

app.post('/add-to-cart/:id', (req, res) => { addToCart.handleAddToCart(req, res) })

app.post('/cart/remove-item/:id', (req, res) => { removeItemCart.handleRemoveItem(req, res) })

app.get('/shop/:id', (req, res) => { shop.handleShop(req ,res) })

app.post('/charge',  (req, res) => { charge.handleCharge(req, res) })

 app.post('/getOrders', (req, res ) => { orders.handleOrders(req, res) })


app.listen(process.env.PORT || 3001, () => {
	console.log(`app is running on port 3001`)
})