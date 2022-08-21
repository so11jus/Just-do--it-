const express = require('express');
const router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');
const User = require('../models/user');
const Task = require('../models/task');

passport.use(new LocalStrategy(function verify(email, password, cb) {
  User.findOne({
    where: {
      email: email,
    },
  }).then(function(row) {
      if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

      let user = row 
      crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
        if (err) { return cb(err); }
        if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
          return cb(null, false, { message: 'Incorrect username or password.' });
        }
        return cb(null, user);
      });
  })
}))

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

/* GET users listing. */
router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/users/login');
  });
});

router.get('/*', (req, res, next) => {
  if (!req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/')
  }
})
router.post('/*', (req, res, next) => {
  if (!req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/')
  }
})

router.get('/login', function(req, res, next) {
  res.render('login')
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}));

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', async function(req, res, next) {
  let users = await User.findAll({
    where: {
      email: req.body.email
    }
  })
  if (users.length === 0) {
    let salt = crypto.randomBytes(16);
    crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', async function(err, hashedPassword) {
      if (err) { return next(err); }
      await User.create({ email: req.body.email, hashed_password: hashedPassword, salt: salt })
      let user = {
        id: this.lastID,
        username: req.body.email
      };
      req.login(user, function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
    })
  }
});

// User.sync()

module.exports = router;
