const https = require('https');
const fs = require('fs');
const { execSync } = require('child_process');

const url = 'https://drive.google.com/uc?export=download&id=1DFGcH5fL5Uq7wg8p8BZRvX3TcR91tAQf';
const dest = 'public/drive_raw_new_logo.png';

function getUrl(downloadUrl) {
  https.get(downloadUrl, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      getUrl(res.headers.location);
    } else {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log('Downloaded new Drive logo file size:', fs.statSync(dest).size);
          try {
            // Process new logo onto solid white background
            execSync('ffmpeg -y -i public/drive_raw_new_logo.png -filter_complex "color=white:s=400x120[bg];[bg][0:v]scale=360:-1[logo];[bg][logo]overlay=x=(W-w)/2:y=(H-h)/2" -frames:v 1 public/drive_new_white.png');
            execSync('cp public/drive_new_white.png public/official_drive_logo.png');
            console.log('SUCCESS: New Drive logo processed with clean white background!');
          } catch (e) {
            console.warn('Fallback copy:', e.message);
            execSync('cp public/drive_raw_new_logo.png public/official_drive_logo.png');
          }
        });
      });
    }
  });
}

getUrl(url);
