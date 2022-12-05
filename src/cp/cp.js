import * as path from 'path';
import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const childFile = path.join(path.dirname('.'), 'files', 'script.js');

  const childProcess = spawn('node', [childFile, ...args]);

  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data);
  });

  process.stdin.on('data', (data) => {
    childProcess.stdin.write(data);
  });
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);
