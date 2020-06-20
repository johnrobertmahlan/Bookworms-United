// Require modules

const mongoose = require('mongoose');

// Construct schema

const userSchema = new mongoose.Schema( {
    name: String,
    email: String,
    avatarURL: String,
    googleId: String
}, {
    timestamps: true
});

// Export model

module.exports = mongoose.model('User', userSchema);