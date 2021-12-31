const fs = require('fs');

function addingNote (title, body){
var note = {
title,
body
};

fs.writeFileSync("notes.txt", note)
}

module.exports = {
    addingNote
}