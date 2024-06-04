const path = require("path");
const convertPdfToImages = require("./utils/convertPdfToImages");
const performOcrOnImages = require("./utils/performOcrOnImages");
const dataSaveOnTextFile = require("./utils/dataSaveOnTextFile");

/**
 * The `processPdf` function processes a PDF file by converting it to images, performing OCR on the
 * images, and saving the OCR results to a text file.
 * @param pdfPath - The `pdfPath` parameter is the file path to the PDF document that you want to
 * process.
 */
const processPdf = async (pdfPath) => {
  const fileName = path.basename(pdfPath, path.extname(pdfPath));
  const imagePaths = await convertPdfToImages(pdfPath, fileName);
  const data = await performOcrOnImages(imagePaths);
  await dataSaveOnTextFile(data, fileName);

  console.log("OCR Results:", data);
};

// Change this line for the PDF file path you want to process.
processPdf(
  path.join(
    __dirname,
    "Third Renewal Agreement LTC ROLL - PIA 12.18.2023 1.pdf"
  )
);
