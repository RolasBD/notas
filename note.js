
const fs = require('fs');
const { title } = require('process');

var fetchNote = () => {
    try{
        return JSON.parse(fs.readFileSync('note.txt'));
    }catch(err){
        return [];
    }
}

var addingNote = (title, body) => {
    var note = fetchNote ();
    var note = {
        title,
        body
    };
  
    var double = note.filter((note) => note.title === title);

    if(double.length === 0){
        note.push(note);

        fs.writeFileSync("note.txt", JSON.stringify(note));
        
        logNote(note);
    }else{
        console.log("Para: Titulo existe")
    }
}

var removeNote = (title) => {
    var note = fetchNote ();
    var filteredNote = note.filter((note) => {note.title !== title});
    fs.writeFileSync("note.txt", JSON.stringify(filteredNote));

}

var readNote = (title) => {
    var note = fetchNote ();
    var filteredNote = note.filter((note) => {note.title !== title});
    logNote (filteredNote[0]);
}

var getAll = () => {
    var note = fetchNote ();

note.foreach((note)=> logNote(note));
}

var logNote = (note) => {
    console.log("---------------------");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addingNote,
    removeNote,
    readNote,
    getAll
}