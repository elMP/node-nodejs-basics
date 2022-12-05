import { Transform, pipeline } from 'stream';

const transform = async () => {
  function reverseString(str) {
    var arrFromString = str.split('');
    var reverseArr = arrFromString.reverse();
    var joinArr = reverseArr.join('');
    return joinArr;
  }

  const reverseTransformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, reverseString(chunk.toString()) + '\n');
    },
  });

  pipeline(process.stdin, reverseTransformStream, process.stdout, () => {});
};

await transform();
