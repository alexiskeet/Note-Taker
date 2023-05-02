// route to return index.html file
const express = require('express');

const notesRouter = require('./api/notes');
const initialRouter = require('./api/index');

const app = express();
 
app.use('/notes', notesRouter);
app.use('/index', initialRouter);

module.exports = app;