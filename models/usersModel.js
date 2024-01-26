const mongoose = require("mongoose");
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        minLength: [3, "Fullname should have a minimum length of 3"],
        maxLength: [20, "Fullname shouldn't exceed 20 charaters"],
        required: [true, "Please enter your fullname"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter your email"],
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    phone: {
        type: Number,
        required: [true, "Please enter your phone"]
    },
    message: {
        type: String,
        minLength: [10, "message should have a minimum characters of 10"],
        required: [true, "Please enter your message"]
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;