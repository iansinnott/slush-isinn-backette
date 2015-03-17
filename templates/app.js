'use strict';

var express    = require('express'),
    bodyParser = require('body-parser'),
    morgan     = require('morgan'),
    moment     = require('moment'),
    path       = require('path'),
    api        = require('./routes/api'),
    webServer  = require('./routes/web-server'),
    config     = require('./config');

var app = express();

var loggingProfile = (process.env.NODE_ENV === 'development') ? 'dev' : 'combined';

app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

// Parse bodies!
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Logging
app.use(morgan(loggingProfile));

// View Helpers
app.use(function(req, res, next) {
  res.locals.version = config.version;
  res.locals.moment = moment;
  next();
});

// REST API
app.use('/api', api);

// Web Server
// app.use('/', webServer);

app.get('*', function(req, res) {
  res.render('app');
});

// We defer to client-side routing so we should never actually get a server-side
// 404
app.use(function(req, res, next) {
  var err = new Error('Not Found.');
  err.status = 404;
  next(err);
});

// Error handling functions must have an arity of 4, i.e. 4 args. This is due to
// connect which underlies express.
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json(err);
});

module.exports = app;
