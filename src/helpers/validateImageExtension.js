const path = require("path");

const validateImageExtension = (value, { req }) => {
  let file = req.file;
  let accept = [".jpg", ".png", ".jpeg"];

  if (file) {
    let fileExtension = path.extname(file.originalname);
    if (!accept.includes(fileExtension)) {
    console.log('Extension invalida');
      throw new Error(`Las extenciones permitidas son ${accept.join(", ")}`);
    }
  }
  return true;
};

module.exports = validateImageExtension;
