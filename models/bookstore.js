// Require modules

const mongoose = require('mongoose');

// Construct review schema

const reviewSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: "User", // This property is created by referencing the GoogleId property of the user
    },
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    }}, { timestamps: true }
);

// Construct bookstore schema

const bookstoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },    
    address: {
        type: String,
        required: true
    },
    genres: [String],
    website: String,
    reviews: [reviewSchema] // Reviews will be embedded here in an array
})

// Export bookstore model

module.exports = mongoose.model('Bookstore', bookstoreSchema);