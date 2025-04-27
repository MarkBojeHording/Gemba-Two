import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesToOptimize = [
  {
    filename: 'KPI-image.jpg',
    width: 1920,
    height: 1080,
    fit: 'cover'
  },
  {
    filename: 'working-together.jpg',
    width: 1920,
    height: 1080,
    fit: 'cover'
  },
  {
    filename: 'strategy-image.jpg',
    width: 1920,
    height: 1080,
    fit: 'cover',
    position: 'top'  // This will keep the top part of the image visible
  },
  {
    filename: 'clients-image.jpg',
    width: 1920,
    height: 1080,
    fit: 'cover'
  }
];

const inputDir = path.join(__dirname, 'public', 'gemba-images');
const outputDir = path.join(__dirname, 'public', 'gemba-images', 'optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(imageConfig) {
  const inputPath = path.join(inputDir, imageConfig.filename);
  const outputPath = path.join(outputDir, imageConfig.filename);

  try {
    await sharp(inputPath)
      .resize(imageConfig.width, imageConfig.height, {
        fit: imageConfig.fit || 'inside',
        withoutEnlargement: true,
        position: imageConfig.position || 'center'
      })
      .jpeg({
        quality: 80,
        progressive: true
      })
      .toFile(outputPath);

    console.log(`Optimized ${imageConfig.filename}`);
  } catch (error) {
    console.error(`Error optimizing ${imageConfig.filename}:`, error);
  }
}

async function optimizeAllImages() {
  for (const imageConfig of imagesToOptimize) {
    await optimizeImage(imageConfig);
  }
}

optimizeAllImages().then(() => {
  console.log('All images optimized successfully!');
});
