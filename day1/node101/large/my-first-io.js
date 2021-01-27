const fs = require('fs');

const buf = fs.readFileSync(process.argv[2]);

const outputSTR = buf.toString();

const newLines = outputSTR.split('\n'). length - 1

console.log(newLines)