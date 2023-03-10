const getNotes = require('./notes.js');
//const command = process.argv[2];
const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    describe: 'Add a new note',
    handler: function(argv) {
        console.log('Title :' + argv.title);
        console.log('Body :' + argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note');
    }
});

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log('Listing all notes');
    }
});

yargs.command({
    command:'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note');
    }
});

//console.log(yargs.argv);
yargs.parse();