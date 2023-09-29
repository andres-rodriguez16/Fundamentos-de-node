const fs = require('fs');
const { Stream } = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('utf8');

// readableStream.on('data', chunk => {
//   data += chunk;
// });
// readableStream.on('end', () => {
//   console.log(data);
// });

// process.stdout.write("hola")
// process.stdout.write(" que tal")
// process.stdout.write(" como va todo")

const transform = Stream.Transform;

class Mayus extends transform {
  _transform(chunk, codif, cb) {
    let chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
  }
}

const mayus = new Mayus();
readableStream.pipe(mayus).pipe(process.stdout);
