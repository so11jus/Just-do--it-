const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sequelize = require('./config/db');
const db = require('./models/relation')
const passport = require('passport');
const session = require('express-session');
const sessionPool = require('pg').Pool

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const api = require('./routes/api');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new (require('connect-pg-simple')(session))({
    // Insert connect-pg-simple options here
    createTableIfMissing: true,
    pool: new sessionPool({
      user: 'ktrwzpdf',
      password: 'OMlD5UY8oiG9dInZYVwB-LOo8A9lWe3f',
      host: 'abul.db.elephantsql.com',
      port: 5432,
      database: 'ktrwzpdf'
    })
  }),
}));
app.use(passport.authenticate('session'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', api)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
