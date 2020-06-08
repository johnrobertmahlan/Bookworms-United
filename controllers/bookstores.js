const Bookstore = require('../models/bookstore');

module.exports = {
    index
}

function index(req, res) {
    Bookstore.find({}, function(err, bookstores) {
        res.render('bookstores/index', {
            bookstores,
            user: req.user
        });
    });
};