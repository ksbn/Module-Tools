import fs from 'fs';
import path from 'path';

// retrieve the command-line arguments, ignoring `node` and the path to the script
const args = process.argv.slice(2);

let showAll = false;  //  -a flag
let onePerLine = false; // -1
let dir = '.';        // folder

// processing arguments
args.forEach(arg => {
  if (arg === '-a') {
    showAll = true;
  } else if (arg === '-1') {
    onePerLine = true;
  } else if (!arg.startsWith('-')) {
    dir = arg;
  }
});

try {
  // read files
  let files = fs.readdirSync(dir, { withFileTypes: true })
      .map(f => f.name);

        // add "." and ".." if -a
  if (showAll) {
    files = ['.', '..', ...files];
  }

  // filter hidden if no -a
  if (!showAll) {
    files = files.filter(name => !name.startsWith('.'));
  }

  // output
  if (onePerLine) {
    files.forEach(f => console.log(f));
  } else {
    console.log(files.join('\t'));
  }
  
} catch (err) {
  console.error(`Error: ${err.message}`);
}