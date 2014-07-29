'use strict';

var fs = require('fs');

module.exports = fs.readFileSync('static/text.txt').toString();
