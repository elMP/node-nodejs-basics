import * as fs from 'fs/promises';
import * as path from 'path';

const list = async () => {
  const pathToFilesFolder = path.join(path.dirname('.'), 'files');
  try {
    let files = await fs.readdir(pathToFilesFolder, { withFileTypes: true });
    console.log("Files in directory 'files':");
    files.forEach((file) => {
      console.log(file.name);
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
