
const ImageKit = require('@imagekit/nodejs');
const fs = require('fs');
require('dotenv').config();

const client = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL
});
console.log(process.env.IMAGEKIT_PUBLIC_KEY)
console.log(process.env.IMAGEKIT_PRIVATE_KEY)
console.log(process.env.IMAGEKIT_URL)
console.log(process.env.JWT_SECRET)
async function uploadFile(file,fileName) {
 try {
    const response = await client.files.upload({
      file: file,
      fileName: fileName
    });
    return response;
  } catch (err) {
    console.error(err);
  }
}

module.exports={uploadFile}
