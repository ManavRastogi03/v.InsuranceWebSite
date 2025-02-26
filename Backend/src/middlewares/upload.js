import multer from "multer";

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname); // Add timestamp to filename to prevent conflicts
  },
});

const upload = multer({ storage: storage });

export default upload;
