// route to return index.html file
const route = require('express').Router();

const notesRouter = require('./api/notes');
const initialRouter = require('./api/index');
 
route.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

route.get('/', (req,res) => {
    res.sendFile(path.hoin(__dirname, '../public/notes.html'));
});

module.exports = route;