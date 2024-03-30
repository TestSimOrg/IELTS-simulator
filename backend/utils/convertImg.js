import { Magick } from 'node-magickwand';
import { fileURLToPath } from 'url';
import * as path from 'path';
import fs from 'fs';
import log from '../lib/logger.js';

async function convertImg(fileName, ext) {
    try {

        const parentDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
        const inputFilePath = path.join(parentDir, 'uploads', `${fileName}.${ext}`);
        const outputFilePath = path.join(parentDir, 'uploads',`${fileName}.jpg`);

        let im = new Magick.Image();
        
        await im.readAsync(inputFilePath);

        await im.magickAsync('JPEG');
        await im.scaleAsync('505x435');
        im.quality(45);

        await im.writeAsync(outputFilePath);

        log.info(`Image converted and saved to ${outputFilePath}`);

        const pngStats = fs.statSync(inputFilePath);
        const jpgStats = fs.statSync(outputFilePath);

        await fs.promises.unlink(inputFilePath);

        const pngSize = pngStats.size; // Size of original PNG file
        const jpgSize = jpgStats.size; // Size of converted JPG file

        // Calculate size reduction percentage
        const compressionPercentage = ((pngSize - jpgSize) / pngSize) * 100;

        const percent = compressionPercentage.toFixed(2);

        log.info(`file size reduced by ${percent}% from ${(pngSize/1024).toFixed(2)} KB to ${(jpgSize/1024).toFixed(2)} KB`)
        
        const imageBuffer = fs.readFileSync(outputFilePath);

        // Convert image buffer to Base64 string
        const base64String = imageBuffer.toString('base64');

        await fs.promises.unlink(outputFilePath);

        return base64String;

    } catch (err) {

        log.error(err);

    }

}

function checkFileType(file, cb) {

    const filetypes = /jpeg|jpg|png/;

    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    const mimetype = filetypes.test(file.mimetype);
  
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images only!');
    }
  }

export {convertImg, checkFileType};