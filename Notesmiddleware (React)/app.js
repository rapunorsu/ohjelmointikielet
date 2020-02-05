var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//notesdemon omat:
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const notesRouter = require('./routes/notes');
const isAuthenticated = require('./middleware/auth')

var app = express();

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

//noted demon omat
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/notes', isAuthenticated, notesRouter);
 // UUSI

module.exports = app;
