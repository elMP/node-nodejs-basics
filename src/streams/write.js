import * as fs from 'fs';
import * as path from 'path';

const write = async () => {
  const myFile = path.join(path.dirname('.'), 'files', 'fileToWrite.txt');
  const myStream = fs.createWriteStream(myFile);

  console.log('Write something. To stop - press ctrl + c');
  process.stdin.pipe(myStream);
  process.stdin.resume();
};

await write();
