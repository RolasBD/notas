console.log("Starting app.js");

const yargs = require('yargs');
const note = require('./note.js');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
    console.log("adding note");
    note.addingNote(title, body);
}else if (command === "remove") {
    console.log("removing note");
    note.removeNote(title);
}else if (command === "read") {
    console.log("reading note");
    note.readNote(title);
}else if (command === "list") {
    console.log("listing all notes");
    note.getAll();
}else{
    console.log("Unknown command");
}