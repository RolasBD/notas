const fs = require('fs');

function addingNote (title, body){
    var note = {
        title,
        body
    };
    
    fs.writeFileSync("practica3.txt", note)
}

module.exports = {
    addingNote
}