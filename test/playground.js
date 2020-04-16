// require ('.') is for own created module;

const fs = require('fs') // internal or remote module;
const path = require('path')
const file = fs.readFileSync('./lib.js',{encoding:'utf-8'}).toString();

//fs.writeFileSync('./lib.js','string to save')
//fs.readFileSync('./lib')
