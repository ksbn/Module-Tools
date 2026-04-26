import fs from 'fs';        

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

const results = [];

let totalLines = 0;
let totalWords = 0;
let totalChars = 0;

//read files
for (const filePath of files) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');

        const lines = (data.match(/\n/g) || []).length;
        const words = data.split(/\s+/).filter(Boolean).length;
        const chars = data.length;

        totalLines += lines;
        totalWords += words;
        totalChars += chars;

        results.push({ filePath, lines, words, chars });
     } catch (err) {
        console.error(`Error reading file ${filePath}: ${err.message}`);
    }
}
    
    // decide mode values
    const getValue = (r) => {
        if (!flag) return [r.lines, r.words, r.chars];
        if (flag === '-l') return r.lines;
        if (flag === '-w') return r.words;
        if (flag === '-c') return r.chars;
    };

// collect values for padding (wc style: one global width)
let values = [];

for (const r of results) {
    const v = getValue(r);
    if (Array.isArray(v)) values.push(...v);
    else values.push(v);
}

// totals
const totalValue =
    !flag ? [totalLines, totalWords, totalChars]
    : flag === '-l' ? totalLines
    : flag === '-w' ? totalWords
    : totalChars;

if (Array.isArray(totalValue)) values.push(...totalValue);
else values.push(totalValue);

// padding 
const width = 8;
const pad = (n) => String(n).padStart(width, ' ');

// output per file
for (const r of results) {
    const v = getValue(r);

    if (!flag) {
        console.log(`${pad(r.lines)}${pad(r.words)}${pad(r.chars)} ${r.filePath}`);
          
    } else {
        console.log(pad(v), r.filePath);
    }
}

// total
if (results.length > 1) {

    if (!flag) {
        console.log(`${pad(totalLines)}${pad(totalWords)}${pad(totalChars)} total`);
    
    } else {
        console.log(pad(totalValue), "total");
    }
}