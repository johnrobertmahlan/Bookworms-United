const Bookstore = require('../models/bookstore');

module.exports = {
    create: userReview,
    delete: deleteReview
}

function userReview(req, res) {
    Bookstore.findById(req.params.id, function(err, bookstore) {
        req.body.createdBy = req.user._id;
        bookstore.reviews.push(req.body);
        bookstore.save(function(err) {
            res.redirect('/bookstores');
        });
    });
};

function deleteReview(req, res) {
    Bookstore.find({"reviews._id": req.params.id}, function(err, bookstore) {
        bookstore[0].reviews.pull(req.params.id);
        bookstore[0].save(function(err) {
            res.redirect('/bookstores')
        });
    });
};