import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesToOptimize = [
  'KPI-image.jpg',
  'working-together.jpg',
  'strategy-image.jpg',
  'clients-image.jpg'
];

const inputDir = path.join(__dirname, 'public', 'gemba-images');
const outputDir = path.join(__dirname, 'public', 'gemba-images', 'optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(filename) {
  const inputPath = path.join(inputDir, filename);
  const outputPath = path.join(outputDir, filename);

  try {
    await sharp(inputPath)
      .resize(1920, 1080, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({
        quality: 80,
        progressive: true
      })
      .toFile(outputPath);

    console.log(`Optimized ${filename}`);
  } catch (error) {
    console.error(`Error optimizing ${filename}:`, error);
  }
}

async function optimizeAllImages() {
  for (const filename of imagesToOptimize) {
    await optimizeImage(filename);
  }
}

optimizeAllImages().then(() => {
  console.log('All images optimized successfully!');
});
