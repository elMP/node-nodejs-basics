import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';

const decompress = async () => {
  const myFile = path.join(path.dirname('.'), 'files', 'fileToCompress.txt');
  const outputStream = fs.createWriteStream(myFile);

  const archiveFile = path.join(path.dirname('.'), 'files', 'archive.gz');
  const inputStream = fs.createReadStream(archiveFile);
  const unzip = zlib.createUnzip();

  inputStream.pipe(unzip).pipe(outputStream);
};

await decompress();
