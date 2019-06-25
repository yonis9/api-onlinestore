const User = require('../models/users');
const bcrypt = require('bcrypt');

const handleSignin = (req, res) => {
    const {email, password } = req.body;
    req.checkBody('email', 'You should not leave empty fields').notEmpty();
    req.checkBody('password', 'You should not leave empty fields').notEmpty();
    const errors = req.validationErrors();
    if(errors) {
        const errorMsg = []
        errors.forEach(error => errorMsg.push(error.msg));
        res.json({message: errorMsg})
    } else {
        User.findOne({'email': email}, (err, user) => {
            if (err) {
                console.log(err)
            } if (!user) {
                res.json({message: 'Wrong Email/Password'})
            } if (user) {
                const isValid = bcrypt.compareSync(password, user.password)
                if(!isValid) {
                    res.json({message: 'Invalid Email/Password'})
                } else {
                    res.json({message: 'success',user: {name: user.name, email: user.email, id: user._id}})
                }
              }
              
    })
    }
}

module.exports = {
    handleSignin
}