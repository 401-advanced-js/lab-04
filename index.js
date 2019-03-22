'use strict';

const express = require('express');
const app = express();

app.use( express.static(`${__dirname}/public`));

const fileWriter = require('./lib/fileWriter.js');

// Obtain and assert input
let files = process.argv.slice(2);

// if( ! (files instanceof Array && files.length !== 1) ) {
//   throw new Error('Invalid Args');
// }

fileWriter(files[0], (err,data) => {
  if ( err ) { throw err; }
});
