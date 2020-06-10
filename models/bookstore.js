const mongoose = require('mongoose');

const bookstoreSchema = new mongoose.Schema({
    name: String,
    address: String,
    //picture: String,
    genres: String,
    website: String,
    //reviews: [reviewSchema]
})

module.exports = mongoose.model('Bookstore', bookstoreSchema);