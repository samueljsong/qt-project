const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        unique: true
    },

    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30,
        unique: true
    },

    friends:{
        type: Array,
        default: []
    },

    posts: {
        type: Array,
        default: []
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

