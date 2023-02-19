const validator = require('validator');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);

console.log(validator.isURL('htps://ww.google.com'));



////////////////////////////////
// const add = require('./utils.js')

// const sum = add(4, -2);

// console.log(sum);

////////////////////////////////
//const fs = require('fs');

//use writeFile method to write data to a file

//fs.writeFileSync('notes.txt', 'My name is Andrew.');

//use appendFileSync to append data to a file

//fs.appendFileSync('notes.txt', ' I\'m 44 years old and I live in Vertou.');

//use readFileSync to read data from a file
// var data = fs.readFileSync('notes.txt', 'utf8');
// console.log(data);

