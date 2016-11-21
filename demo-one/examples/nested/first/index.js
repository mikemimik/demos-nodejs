'use strict';

const fs = require('fs');
const path = require('path');

let files = fs.readdirSync(__dirname, 'utf8');
files.forEach((file) => {
  let splitFile = file.split('.');
  let filename = file.split('.')[0];
  let extension = splitFile[splitFile.length - 1];
  if (extension === 'js' && filename !== 'index') {
    module.exports[filename] = require(path.join(__dirname, file));
  }
});
