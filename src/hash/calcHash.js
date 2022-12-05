import * as crypto from 'crypto';
import * as fs from 'fs/promises';
import * as path from 'path';

const calculateHash = async () => {
  const pathToFileToRead = path.join(
    path.dirname('.'),
    'files',
    'fileToCalculateHashFor.txt'
  );

  const content = await fs.readFile(pathToFileToRead, { encoding: 'utf8' });
  const hash = crypto
    .createHmac('sha256', 'I forgot it')
    .update(content)
    .digest('hex');
  console.log(hash);
};

await calculateHash();
