const { recognize } = require("tesseract.js");
/**
 * The function `performOcrOnImages` takes an array of image paths, performs optical character
 * recognition (OCR) on each image using the "eng" language, and returns the concatenated text
 * extracted from all images.
 * @param imagePaths - The `imagePaths` parameter in the `performOcrOnImages` function is an array
 * containing the file paths of the images on which Optical Character Recognition (OCR) will be
 * performed.
 * @returns The `performOcrOnImages` function returns a concatenated string of text extracted from the
 * images located at the provided `imagePaths`.
 */

const performOcrOnImages = async (imagePaths) => {
  let imageText = "";
  for (const imagePath of imagePaths) {
    try {
      const {
        data: { text },
      } = await recognize(imagePath, "eng");
      imageText += text;
    } catch (error) {}
  }

  return imageText;
};

module.exports = performOcrOnImages;
