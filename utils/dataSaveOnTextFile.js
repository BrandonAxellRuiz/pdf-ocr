/**
 * The function `dataSaveOnTextFile` saves data to a text file using Node.js file system module with
 * error handling and returns a promise.
 * @param data - The `dataSaveOnTextFile` function you provided is used to save data to a text file.
 * The `data` parameter represents the content that will be saved to the file.
 * @param fileName - The `fileName` parameter in the `dataSaveOnTextFile` function represents the name
 * of the file where the data will be saved. It is used to specify the name of the text file in which
 * the `data` will be written.
 * @returns The `dataSaveOnTextFile` function returns a Promise. If the data is successfully saved to
 * the specified text file, it resolves with the file path where the data was saved. If there is an
 * error during the saving process, it rejects with the error. In case of an error, it also logs a
 * message "Failed to save data:" along with the error. If needed, it returns
 */
const dataSaveOnTextFile = (data, fileName) => {
  const fs = require("fs");
  const path = require("path");
  const filePath = path.join(__dirname, `../data/${fileName}.txt`);

  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(filePath);
      }
    });
  }).catch((error) => {
    console.error("Failed to save data:", error);
    // Optionally rethrow or handle error further
    return null; // return null or handle differently if needed
  });
};

module.exports = dataSaveOnTextFile;
