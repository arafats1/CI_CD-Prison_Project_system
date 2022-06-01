const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const userRegistSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique:true
    },

    password: {
        type: String,
        required: true
    }

});

userRegistSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
  });
  

module.exports = mongoose.model('UserRegister', userRegistSchema);