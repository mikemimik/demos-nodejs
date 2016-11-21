'use strict';

const fs = require('fs');
const path = require('path');

let directories = fs.readdirSync(__dirname, 'utf8')
  .filter((item) => fs.statSync(path.join(__dirname, item)).isDirectory());

let components = {};

directories.forEach((directory) => {
  components[directory] = require(path.join(__dirname, directory));
});

module.exports = components;
