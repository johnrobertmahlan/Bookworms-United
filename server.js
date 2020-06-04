// Require Modules
const express = require('express');
const morgan = require('morgan');
const port = 3000;

// Create Express App
const app = express();

// Connect to DB
require('./config/database');

// Mount Middleware
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Mount Routes

// Tell App to Listen
app.listen(port, function() {
    console.log(`Express is listening on port: ${port}.`)
})