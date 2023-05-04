// get api/notes should read the db.json file and return all saved notes as JSON

// POST api/notes should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client
// give each note a unique id when it's saved (look into npm packages that could do this)
const input = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../../helpers/fsUtils');

input.get('/', (req,res) => 
readFromFile('../../public/index.html').then((data) => res.json(JSON.parse(data)))
);
