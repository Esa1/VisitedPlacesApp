const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};
console.log("__dirname:", __dirname);

const uploadDir = path.join("uploads", "images");

const fileUpload = multer({
  limits: { fileSize: 500000 },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, `${Date.now()}-${uuidv4()}.${ext}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    if (!isValid) {
      cb(new Error("Invalid mime type!"));
      return;
    }
    cb(null, true);
  },
});

module.exports = fileUpload;
