import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinaryConfig.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "insurance-docs",
    allowed_formats: ["jpg", "png", "jpeg", "pdf"],
    transformation: [{ width: 800, height: 800, crop: "limit" }],
  },
});

const uploadfile = multer({ storage });

export default uploadfile;
