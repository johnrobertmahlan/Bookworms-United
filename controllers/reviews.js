// Require model

const Bookstore = require('../models/bookstore');

// Export controller

module.exports = {
    create: userReview,
    delete: deleteReview,
    show,
    edit: editReview
}

// Allow a user to write a review if they have not done so already
function userReview(req, res) {
    Bookstore.findById(req.params.id, function(err, bookstore) {

        // Check to see whether the user has already written a review; if so, return an error message
        for(let i = 0; i<bookstore.reviews.length; i++) {
            if(bookstore.reviews[i].createdBy = req.user._id) {
                return res.render('bookstores/show', {bookstore, user: req.user, error: "Sorry! You've already written a review! But feel free to edit the one you already wrote! We want to know what you really think!"} )
            };
        };

        // If the user has not already written a review, create it
        req.body.createdBy = req.user._id;
        bookstore.reviews.push(req.body);
        bookstore.save(function(err) {
            res.redirect(`/bookstores/${req.params.id}`);
        });
    });
};

// Allow the user to delete their review
function deleteReview(req, res) {
    Bookstore.find({"reviews._id": req.params.id}, function(err, bookstore) {
        bookstore[0].reviews.pull(req.params.id);
        bookstore[0].save(function(err) {
            res.redirect(`/bookstores/${bookstore[0]._id}`)
        });
    });
};

// Show a particular review to the user
function show(req, res) {
    Bookstore.find({"reviews._id": req.params.id},function(err, bookstore) {
        res.render('reviews/show', {user: req.user, bookstore, error: null});
    });
};

// Allow the user to edit their review
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