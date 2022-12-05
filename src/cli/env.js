const parseEnv = () => {
  let output = '';
  for (let i = 0; i < process.argv.length; i++) {
    let arg = process.argv[i];
    if (arg.substring(0, 4) === 'RSS_') {
      output += arg + '; ';
    }
  }
  console.log(output.substring(0, output.length - 2));
};

parseEnv();
