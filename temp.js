const fs = require('fs'); 
const lines = fs.readFileSync('C:/Users/kasid/Downloads/index_2_1_1.html', 'utf8').split('\n'); 
let b64 = ''; 
for(let line of lines) { 
    if (line.includes('const BOSS_MODEL_B64')) { 
        b64 = line.split('"')[1]; 
        break; 
    } 
} 
const binStr = atob(b64); 
const len = Math.min(binStr.length, 100000); 
let str = ''; 
for(let i=0; i<len; i++) str += String.fromCharCode(binStr.charCodeAt(i)); 
const anims = new Set();
const matches = str.match(/"name"\s*:\s*"([^"]+)"/g);
if (matches) {
    matches.forEach(m => {
        const name = m.split('"')[3];
        if (!name.includes('Object') && !name.includes('Material') && !name.includes('Node')) {
            anims.add(name);
        }
    });
}
console.log(Array.from(anims));
