const fs = require('fs');

const getNotes = function () {
    return fs.readFileSync('notes.txt', 'utf8');
};

module.exports = getNotes; 