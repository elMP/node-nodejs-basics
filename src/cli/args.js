const parseArgs = () => {
  let output = '';

  for (let i = 2; i < process.argv.length; i++) {
    let arg = process.argv[i];
    if (i % 2 === 0) {
      output += arg.substring(2) + ' is ';
    } else {
      output += arg + ', ';
    }
  }
  console.log(output.substring(0, output.length - 2));
};

parseArgs();
