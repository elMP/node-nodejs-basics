import * as fs from 'fs/promises';
import * as path from 'path';

const read = async () => {
  const pathToFileToRead = path.join(
    path.dirname('.'),
    'files',
    'fileToRead.txt'
  );

  try {
    const content = await fs.readFile(pathToFileToRead, { encoding: 'utf8' });
    console.log(content);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
