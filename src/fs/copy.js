import * as fs from 'fs/promises';
import { exists } from 'fs';
import * as path from 'path';

const copy = async () => {
  const pathToSourceFolder = path.join(path.dirname('.'), 'files');

  exists(pathToSourceFolder, (ifFileExist) => {
    if (!ifFileExist) {
      throw new Error('FS operation failed');
    } else {
      (async () => {
        const pathToCopyFolder = path.join(path.dirname('.'), 'files_copy');
        try {
          await fs.mkdir(pathToCopyFolder, {});
        } catch {
          throw new Error('FS operation failed');
        }

        let files = await fs.readdir(pathToSourceFolder);
        files.forEach((file) => {
          (async () => {
            let pathToSourceFile = path.join(pathToSourceFolder, file);
            let pathToCopyFile = path.join(pathToCopyFolder, file);
            try {
              await fs.copyFile(pathToSourceFile, pathToCopyFile);
              console.log(`${file} was copied to files_copy folder`);
            } catch {
              console.log(`The ${file} could not be copied`);
            }
          })();
        });
      })();
    }
  });
};

copy();
