import * as fs from 'fs';
import * as path from 'path';

const read = async () => {
  const myFile = path.join(path.dirname('.'), 'files', 'fileToRead.txt');
  const readableStream = fs.createReadStream(myFile, 'utf-8');

  readableStream.on('data', function (chunk) {
    console.log(chunk);
  });
};

await read();
