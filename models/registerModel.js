//Here we shall define and store schemas where our data is
//Schema is data that describes another data.

const mongoose = require('mongoose');
const registerSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    crime: {
        type: String,
        required: true
    },

    kin: {
        type: String,
        required: true
    },

    kinNumber: {
        type: Number,
        required: true
    },

    entryDate: {
        type: String,
        required: true
    },

    releaseDate: {
        type: String,
        required: true
    }
    
 
});

module.exports = mongoose.model('Register', registerSchema );