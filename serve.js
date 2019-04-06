const fs = require('fs');
const server = require('http').createServer();
const {Writable} = require('stream');
const { Readable } = require('stream');

//var ws = fs.createWriteStream('out.txt');

server.on('request', (req, res) => {
    const src = fs.createReadStream('out.txt');
    src.pipe(res,);

});



server.listen(8000);