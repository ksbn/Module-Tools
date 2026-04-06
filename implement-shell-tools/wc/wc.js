import fs from 'fs';
import path from 'path';

//  retrieving command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
    console.error("Usage: node wc.js [-l|-w|-c] <file1> [file2 ...]");
    process.exit(1);
}

// check if there any flag
let flag = null;
let files = args;

if (args[0]?.startsWith('-')) {
    flag = args[0];
    files = args.slice(1);
}

let totalLines = 0;
let totalWords = 0;
let totalChars = 0;

for (const filePath of files) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const lines = data.split('\n').length;
        const words = data.split(/\s+/).filter(Boolean).length;
        const chars = data.length;

        totalLines += lines;
        totalWords += words;
        totalChars += chars;

        if (!flag) console.log(`${lines} ${words} ${chars} ${filePath}`);
        else if (flag === '-l') console.log(`${lines} ${filePath}`);
        else if (flag === '-w') console.log(`${words} ${filePath}`);
        else if (flag === '-c') console.log(`${chars} ${filePath}`);
        else {
            console.error(`Unknown flag: ${flag}`);
            process.exit(1);
        }
    } catch (err) {
        console.error(`Error reading file ${filePath}: ${err.message}`);
    }
}

// if there are multiple files and the flag is not set, display the total
if (!flag && files.length > 1) {
    console.log(`${totalLines} ${totalWords} ${totalChars} total`);
}