import fs from 'fs';

// receive arguments
const args = process.argv.slice(2);

// flags
let showAllLines = false; // -n
let showNonEmpty = false; // -b

// flags
const files = [];

// parce arguments
for (const arg of args) {
  if (arg === '-n') {
    showAllLines = true;
  } else if (arg === '-b') {
    showNonEmpty = true;
  } else {
    files.push(arg);
  }
}

// -b redefines -n
if (showNonEmpty) {
  showAllLines = false;
}


// process files in order
for (const file of files) {
  let content;
  let lineNumber = 1;

  try {
    content = fs.readFileSync(file, 'utf-8');
  } catch (err) {
    console.error(`cat: ${file}: No such file or directory`);
    continue;
  }

  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // the last empty line
    const isLastEmptyLine = (i === lines.length - 1 && line === '');

    if (showNonEmpty) {
      if (line.trim() !== '') {
        console.log(`${lineNumber++}\t${line}`);
      } else if (!isLastEmptyLine) {
        console.log('');
      }
    } else if (showAllLines) {
      if (!isLastEmptyLine) {
        console.log(`${String(lineNumber++).padStart(6)}\t${line}`);
      }
    } else {
      if (!isLastEmptyLine) {
        console.log(line);
      }
    }
  }
}