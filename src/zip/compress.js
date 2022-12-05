import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';

const compress = async () => {
  const myFile = path.join(path.dirname('.'), 'files', 'fileToCompress.txt');
  const inputStream = fs.createReadStream(myFile);

  const archiveFile = path.join(path.dirname('.'), 'files', 'archive.gz');
  const outputStream = fs.createWriteStream(archiveFile);
  const gzip = zlib.createGzip();

  inputStream.pipe(gzip).pipe(outputStream);
};

await compress();
