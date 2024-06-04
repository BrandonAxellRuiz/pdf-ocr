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

// const performOcrOnImages = async (imagePaths) => {
//   let imageText = "";
//   for (const imagePath of imagePaths) {
//     try {
//       const {
//         data: { text },
//       } = await recognize(imagePath, "eng", {
//         logger: (m) => console.log(m),
//       });
//       imageText += text;
//     } catch (error) {}
//   }

//   return imageText;
// };

const performOcrOnImages = async (imagePaths) => {
  // Función auxiliar para procesar una única imagen
  const processImage = async (imagePath) => {
    try {
      const {
        data: { text },
      } = await recognize(imagePath, "eng", {
        logger: (m) => console.log(m),
      });
      return text;
    } catch (error) {
      console.error(`Error processing ${imagePath}:`, error);
      return ""; // Devuelve un string vacío en caso de error
    }
  };

  // Crea un array de promesas usando map y luego espera a que todas se resuelvan
  const texts = await Promise.all(
    imagePaths.map((imagePath) => processImage(imagePath))
  );

  // Concatena todos los textos obtenidos en un solo string
  return texts.join("");
};

// const performOcrOnImages = async (imagePaths) => {
//   // Función auxiliar para procesar una única imagen
//   const processImage = async (imagePath) => {
//     try {
//       // Asume que 'recognize' puede extraer texto con formato si se configura correctamente
//       const {
//         data: { text, html },
//       } = await recognize(imagePath, "eng", {
//         logger: (m) => console.log(m),
//         // Podrías necesitar configurar opciones adicionales aquí para soportar formato
//         preserve_format: true, // Esta opción es hipotética, depende de la API real
//       });
//       // Devuelve HTML si está disponible, de lo contrario, texto plano
//       return html || text;
//     } catch (error) {
//       console.error(`Error processing ${imagePath}:`, error);
//       return ""; // Devuelve un string vacío en caso de error
//     }
//   };

//   // Crea un array de promesas usando map y luego espera a que todas se resuelvan
//   const results = await Promise.all(
//     imagePaths.map((imagePath) => processImage(imagePath))
//   );

//   // Si se extrajo HTML, puedes unirlos con un divisor específico, o como prefieras manejar el formato
//   return results.join("\n\n");
// };

module.exports = performOcrOnImages;
