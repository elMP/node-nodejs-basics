import { Worker } from 'worker_threads';
import * as os from 'os';

const performCalculations = async () => {
  const osCount = os.cpus().length;
  let workers = [];

  for (let i = 10; i < 10 + osCount; i++) {
    workers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
          workerData: { n: i },
        });
        worker.on('message', (data) => resolve({ status: 'resolved', data }));
        worker.on('error', () => reject({ status: 'error', data: null }));
      })
    );
  }

  const result = await Promise.all(workers);
  console.log(result);
};

await performCalculations();
