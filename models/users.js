const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    
});

UsersSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}
UsersSchema.methods.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('Users', UsersSchema);