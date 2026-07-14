const fs = require('fs');
const html = fs.readFileSync('C:/Users/kasid/Downloads/index_2_1_1.html', 'utf8');
const match = html.match(/const BOSS_MODEL_B64 = "(.*?)";/s);
if (match) {
  const b64 = match[1];
  const b = Buffer.from(b64, 'base64');
  const jsonLen = b.readUInt32LE(12);
  const jsonChunk = b.slice(20, 20 + jsonLen).toString('utf8');
  const gltf = JSON.parse(jsonChunk);
  const bones = gltf.nodes ? gltf.nodes.filter(n => n.name && n.name.toLowerCase().includes('bone')) : [];
  console.log('Bones:', bones.length);
  if(gltf.skins) {
      console.log('Skins found:', gltf.skins.length);
  }
}
