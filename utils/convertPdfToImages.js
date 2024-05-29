const gm = require("gm").subClass({ imageMagick: true });

/**
 * The function `convertPdfToImages` asynchronously converts each page of a PDF file to PNG images with
 * specified density and returns an array of the output file paths.
 * @param pdfPath - The `pdfPath` parameter in the `convertPdfToImages` function is the file path to
 * the PDF that you want to convert into images. This function takes a PDF file and converts each page
 * of the PDF into a separate image file (PNG format in this case).
 * @returns The `convertPdfToImages` function returns an array of strings representing the file paths
 * of the converted images.
 */
const convertPdfToImages = async (pdfPath) => {
  // Determine the number of pages or assume a fixed number; you might need another way to get this.
  const numberOfPages = 5; // Example: You would need to dynamically determine this based on the PDF.

  let results = [];
  for (let i = 0; i < numberOfPages; i++) {
    const outputPath = `images/test-${i + 1}.png`;

    // Wrap the gm write function in a promise
    const result = await new Promise((resolve, reject) => {
      gm(`${pdfPath}[${i}]`)
        .density(300, 300) // Set density (DPI) for better image quality
        .write(outputPath, (error) => {
          if (error) {
            reject(error);
          } else {
            resolve(outputPath);
          }
        });
    }).catch((error) => {
      console.error(`Failed to convert page ${i + 1}:`, error);
      // Optionally rethrow or handle error further
      return null; // return null or handle differently if needed
    });

    if (result) {
      results.push(result);
    }
  }

  return results;
};

module.exports = convertPdfToImages;