// write the note files here
const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);
