// Require modules

const router = require('express').Router();
const passport = require('passport');
const nodemailer = require('nodemailer');

// Identify routes (Future: Build an indexCtrl to handle these functions)

router.get('/', function(req, res) {
    res.render('index', {
        user: req.user
    });
});

router.get('/about', function(req, res) {
    res.render('about', {
        user: req.user
    });
});

router.get('/contact', function(req, res) {
    res.render('contact', {
        user: req.user
    });
});

router.post('/contact', function(req, res) {
    // Instantiate the SMTP server
    const transport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: "4c9e3dd270f4b4",
            pass: "7c16d8c1353dee"
        }
    })

    // Specify what the email will look like
    const mailOpts = {
        from: `${req.body.email}`,
        to: 'johnrobertmahlan@gmail.com',
        subject: 'New Message from Bookworms United',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }

    // Send the email
    transport.sendMail(mailOpts, function(err, response) {
        // If sending fails, send user to a page informing them of this
        if(err) {
            res.render('failure', {user: req.user})
        }
        // If sending succeeds, send user to a page informing them of this
        else {
            res.render('success', {user: req.user})
        }
    })
})

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/bookstores',
        failureRedirect: '/'
    }
));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// Export router

module.exports = router;