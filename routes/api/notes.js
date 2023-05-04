// route to return the notes.html file
const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
} = require('../../helpers/fsUtils');
const db = require('../../db/db.json');

notes.get('/', (req, res) => {
    readFromFile('../../db/db.json').then((data) =>
      res.json(JSON.parse(data))
    );
  });
  

  notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { isValid, errors } = req.body;
  
  
    const payload = {
      time: Date.now(),
      error_id: uuidv4(),
      errors,
    };
  
    if (!isValid) {
      readAndAppend(payload, '../../db/db.json');
      res.json(`Diagnostic information added 🔧`);
    } else {
      res.json({
        message: 'Object is valid, not logging. Check front end implementation',
        error_id: payload.error_id,
      });
    }
  });
  
  module.exports = notes;
  