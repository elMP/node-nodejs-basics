import * as fs from 'fs';
import * as path from 'path';

const create = async () => {
  const myFile = path.join(path.dirname('.'), 'files', 'fresh.txt');
  fs.exists(myFile, (ifFileExist) => {
    if (ifFileExist) {
      throw new Error('FS operation failed');
    } else {
      fs.writeFile(myFile, 'I am fresh and young', function (err) {
        if (err) throw err;
        console.log('File created');
      });
    }
  });
};

await create();
