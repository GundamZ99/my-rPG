const fs = require('fs');
const html = fs.readFileSync('C:/Users/kasid/Downloads/index_2_1_1.html', 'utf8');
const b64start = html.indexOf('const BOSS_MODEL_B64 = "') + 24;
const b64end = html.indexOf('"', b64start);
const b64 = html.substring(b64start, b64end);
const buf = Buffer.from(b64.substring(0, 10000), 'base64');
console.log(buf.toString('utf8').substring(0, 5000));
