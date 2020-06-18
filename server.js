// Require Modules
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;
const indexRouter = require('./routes/index');
const bookstoresRouter = require('./routes/bookstores');
const reviewsRouter = require('./routes/reviews');

require('dotenv').config();

// Create Express App
const app = express();

// Connect to DB
require('./config/database');

// Configure authentication
require('./config/passport');

// Mount Middleware
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(session( {
    secret: 'bookwormsunited',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

// Mount Routes
app.use('/', indexRouter);
app.use('/bookstores', bookstoresRouter);
app.use('/', reviewsRouter);

// Tell App to Listen
app.listen(port, function() {
    console.log(`Express is listening on port: ${port}.`)
})