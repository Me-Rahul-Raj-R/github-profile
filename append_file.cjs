const fs = require('fs');
const [, , fp, b64] = process.argv;
const buffer = Buffer.from(b64, 'base64');
fs.appendFileSync(fp, buffer.toString('utf8'));
console.log('Appended: ' + fp);