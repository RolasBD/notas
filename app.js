console.log("Starting app.js");

const fs = require('fs');
const notes = require('./notes.js');

fs.appendFileSync("practica3.txt","Rolando Barragan");

console.log(notes.add(2,5));
console.log(notes.sub(2,5));