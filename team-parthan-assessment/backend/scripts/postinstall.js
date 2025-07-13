// Developed by Manjistha Bidkar
const { execSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const isWindows = os.platform() === 'win32';
const binDir = path.resolve(__dirname, '../bin');

if (!fs.existsSync(binDir)) {
  fs.mkdirSync(binDir);
}

const fileName = isWindows ? 'yt-dlp.exe' : 'yt-dlp';
const url = isWindows
  ? 'https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe'
  : 'https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_linux';
const outputPath = path.join(binDir, fileName);

console.log(`[postinstall] Downloading ${fileName} from ${url}...`);
execSync(`curl -Lo ${outputPath} ${url}`);
if (!isWindows) {
  execSync(`chmod +x ${outputPath}`);
}
console.log(`[postinstall] yt-dlp saved to ${outputPath}`);
