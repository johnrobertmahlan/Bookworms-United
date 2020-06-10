const Bookstore = require('../models/bookstore');

module.exports = {
    index,
    new: newBookstore,
    create
}

function index(req, res) {
    Bookstore.find({}, function(err, bookstores) {
        res.render('bookstores/index', {
            bookstores,
            user: req.user
        });
    });
};

function newBookstore(req, res) {
    res.render('bookstores/new', {
        user: req.user
    });
};

function create(req, res) {
    const bookstore = new Bookstore(req.body);
    bookstore.save(function(err) {
        if(err) return res.redirect('/bookstores/new');
        res.redirect('/bookstores');
    });
};