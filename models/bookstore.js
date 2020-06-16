const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    }}, { timestamps: true }
);

const bookstoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },    
    address: {
        type: String,
        required: true
    },
    //picture: String,
    genres: [String],
    website: String,
    reviews: [reviewSchema]
})

module.exports = mongoose.model('Bookstore', bookstoreSchema);