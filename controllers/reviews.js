const Bookstore = require('../models/bookstore');

module.exports = {
    create: userReview
}

function userReview(req, res) {
    Bookstore.findById(req.params.id, function(err, bookstore) {
        bookstore.reviews.push(req.body);
        bookstore.save(function(err) {
            res.redirect('/bookstores');
        });
    });
};