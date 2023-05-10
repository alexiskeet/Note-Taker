// route to return the notes.html file
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
} = require('../../helpers/fsUtils');

router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
      res.json(JSON.parse(data))
    );
  });
  

  router.post('/', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;
    const newNote = {
      title,
      text,
      id: uuidv4()
    };
    if(title && text){
      readAndAppend(newNote, './db/db.json');
      res.json(`Note information added 🔧`);
    } else {
      res.json({
        message: 'Cant write the note'
      });
    }
  });
  
  module.exports = router;
  