const path = require("path");
const convertPdfToImages = require("./utils/convertPdfToImages");
const performOcrOnImages = require("./utils/performOcrOnImages");
const dataSaveOnTextFile = require("./utils/dataSaveOnTextFile");

/**
 * The `processPdf` function processes a PDF file by converting it to images, performing OCR on the
 * images, saving the OCR results to a text file, and logging the results.
 * @param pdfPath - The `pdfPath` parameter is the file path to the PDF document that you want to
 * process in the `processPdf` function.
 */
const processPdf = async (pdfPath) => {
  const imagePaths = await convertPdfToImages(pdfPath);
  const data = await performOcrOnImages(imagePaths);
  await dataSaveOnTextFile(data, "t12");

  console.log("OCR Results:", data);
};

// Change this line for the PDF file path you want to process.
processPdf(path.join(__dirname, "mypdf.pdf"));
