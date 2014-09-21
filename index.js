'use strict';

var fs = require('fs');

module.exports = fs.readFileSync(__dirname + 'static/text.txt').toString();
