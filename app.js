console.log("Starting app.js");

const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add"){
    console.log("adding note");
    notes.addingNote(title, body);
}
else if (command === "remove"){
    console.log("removing note");
}
else if (command === "reading"){
    console.log("reading note");
}
else if (command === "list"){
    console.log("listing all notes");
}
else{
    console.log("Unknown command");
}