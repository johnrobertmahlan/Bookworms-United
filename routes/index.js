const router = require('express').Router();
const passport = require('passport');
const nodemailer = require('nodemailer');

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

    // Attempt to send the email
    transport.sendMail(mailOpts, function(err, response) {
        if(err) {
            res.render('failure', {user: req.user})
        }
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

module.exports = router;