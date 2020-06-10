const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    content: String,
    rating: Number
    }, { timestamps: true }
);

const bookstoreSchema = new mongoose.Schema({
    name: String,
    address: String,
    //picture: String,
    genres: [String],
    website: String,
    reviews: [reviewSchema]
})

module.exports = mongoose.model('Bookstore', bookstoreSchema);