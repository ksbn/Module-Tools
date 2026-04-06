import fs from 'fs';
import path from 'path';

// retrieve the command-line arguments, ignoring `node` and the path to the script
const args = process.argv.slice(2);

let showAll = false;  //  -a flag
let dir = '.';        // folder

// processing arguments
args.forEach(arg => {
  if (arg === '-a') {
    showAll = true;
  } else if (!arg.startsWith('-')) {
    dir = arg;
  }
});

try {
  // read files
  const files = fs.readdirSync(dir, { withFileTypes: true })
                  .filter(f => showAll || !f.name.startsWith('.')) // filtered hidden
                  .map(f => f.name);

  // each file on separate line 
  files.forEach(f => console.log(f));
} catch (err) {
  console.error(`Error: ${err.message}`);
}