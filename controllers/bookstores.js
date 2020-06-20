// Require model

const Bookstore = require('../models/bookstore');

// Export controller

module.exports = {
    index,
    new: newBookstore,
    create,
    show
}

// Show all bookstores to the user
function index(req, res) {
    Bookstore.find({}, function(err, bookstores) {
        res.render('bookstores/index', {
            bookstores,
            user: req.user
        });
    });
};


// Show the user a page that allows them to add a bookstore to the database
function newBookstore(req, res) {
    res.render('bookstores/new', {
        user: req.user
    });
};

// Allow the user to add a new bookstore to the database
function create(req, res) {
    const bookstore = new Bookstore(req.body);
    bookstore.save(function(err) {
        if(err) return res.redirect('/bookstores/new');
        res.redirect('/bookstores');
    });
};

// Show the user a single bookstore
function show(req, res) {
    Bookstore.findById(req.params.id, function(err, bookstore) {
        res.render('bookstores/show', {user: req.user, bookstore, error: null});
    })
}