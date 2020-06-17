const Bookstore = require('../models/bookstore');

module.exports = {
    create: userReview,
    delete: deleteReview,
    show,
    edit: editReview
}

function userReview(req, res) {
    Bookstore.findById(req.params.id, function(err, bookstore) {
        for(let i = 0; i<bookstore.reviews.length; i++) {
            if(bookstore.reviews[i].createdBy = req.user._id) {
                return res.render('bookstores/show', {bookstore, user: req.user, error: "Sorry! You've already written a review! But feel free to edit the one you already wrote! We want to know what you really think!"} )
            };
        };
        req.body.createdBy = req.user._id;
        bookstore.reviews.push(req.body);
        bookstore.save(function(err) {
            res.redirect(`/bookstores/${req.params.id}`);
        });
    });
};

function deleteReview(req, res) {
    Bookstore.find({"reviews._id": req.params.id}, function(err, bookstore) {
        bookstore[0].reviews.pull(req.params.id);
        bookstore[0].save(function(err) {
            res.redirect(`/bookstores/${bookstore[0]._id}`)
        });
    });
};

function show(req, res) {
    Bookstore.find({"reviews._id": req.params.id},function(err, bookstore) {
        res.render('reviews/show', {user: req.user, bookstore, error: null});
    });
};

function editReview(req, res) {
    Bookstore.find({"reviews._id": req.params.id, "reviews.createdBy": req.user._id}, function(err, bookstore) {
        let review = bookstore[0].reviews.id(req.params.id);
        review.content = req.body.content;
        review.rating = req.body.rating;
        bookstore[0].save(function(err) {
            console.log(err);
            res.redirect(`/bookstores/${bookstore[0].id}`);
        });
    });
};