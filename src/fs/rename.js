import * as fs from 'fs/promises';
import { exists } from 'fs';
import * as path from 'path';

const rename = async () => {
  const from = path.join(path.dirname('.'), 'files', 'wrongFilename.txt');
  const to = path.join(path.dirname('.'), 'files', 'properFilename.md');

  exists(to, (ifFileExist) => {
    if (ifFileExist) {
      throw new Error('FS operation failed');
    } else {
      (async () => {
        try {
          await fs.rename(from, to);
          console.log('file renamed');
        } catch (error) {
          throw new Error('FS operation failed');
        }
      })();
    }
  });
};

await rename();
