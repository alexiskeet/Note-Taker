
const input = require('express').Router();
const notes = require('./notes');

input.use(notes);

module.exports = input;


