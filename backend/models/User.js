const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true }, //User Name 
    email: { type: String, required: true, unique: true }, //Email
    password: { type: String, required: true } //Hashed Password
});

module.exports = mongoose.model('User', userSchema);