import * as fs from 'fs/promises';
//import { exists } from 'fs';
import * as path from 'path';

const remove = async () => {
  const pathToFileToRemove = path.join(
    path.dirname('.'),
    'files',
    'fileToRemove.txt'
  );

  try {
    await fs.rm(pathToFileToRemove);
    console.log('File deleted');
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
