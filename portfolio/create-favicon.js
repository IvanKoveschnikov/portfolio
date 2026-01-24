
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = path.resolve('public/hero.jpg');
const outputPath = path.resolve('public/favicon.png');

async function createRoundedFavicon() {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    const size = Math.min(metadata.width, metadata.height);
    const radius = size / 2;

    const roundedImage = Buffer.from(
      `<svg><rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}"/></svg>`
    );

    await image
      .resize(size, size)
      .composite([{
        input: roundedImage,
        blend: 'dest-in'
      }])
      .png()
      .toFile(outputPath);
      
    console.log('Favicon created successfully!');
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

createRoundedFavicon();
