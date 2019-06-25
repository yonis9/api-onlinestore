const User = require('../models/users');

const handleRegister = (req, res) => {
    const { name, email, password } = req.body;
    req.checkBody('email', 'Invalid email').isEmail();
    req.checkBody('password', 'Password should contain at least 5 chars').notEmpty().isLength({min: 5})
    const errors = req.validationErrors();
    if(errors) {
        const errorMsg = []
        errors.forEach(error => errorMsg.push(error.msg));
        res.json({message: errorMsg})
    } else {
        User.findOne({'email': email}, (err, result) => {
            if (err) {
                console.log(err)
            } if (result) {
                res.json({message: 'Email is already in use'})
            } else {
                const newUser = new User()
                newUser.name = name,
                newUser.email = email,
                newUser.password = newUser.encryptPassword(password);
                newUser.save((err, result) => {
                    if(err) {
                        console.log(err)
                    } else {
                        res.json({message: 'success', user:{ name: newUser.name, email: newUser.email, id: newUser._id}})
                    }
                })
            }
        })
    }
}

module.exports = {
    handleRegister
}
