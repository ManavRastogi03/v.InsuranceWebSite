import InsuranceCompany from "../models/InsuranceCompany.js";
import cloudinary from "../config/cloudinaryConfig.js";

export const createInsuranceCompany = async (req, res) => {
  try {
    const { companyName, contactNumber, insurancePlans } = req.body;
    const file = req.file; // ✅ Image file from frontend

    // ✅ Validate required fields
    if (!companyName || !contactNumber || !insurancePlans) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // ✅ Convert insurancePlans (Check if it's a valid JSON array)
    let parsedPlans;
    try {
      parsedPlans = JSON.parse(insurancePlans);
      if (!Array.isArray(parsedPlans) || parsedPlans.length === 0) {
        return res.status(400).json({ message: "At least one insurance plan is required!" });
      }
    } catch (err) {
      return res.status(400).json({ message: "Invalid format for insurance plans!" });
    }

    let companyLogo = "https://asset.cloudinary.com/duj6tm4qi/c4692e8823e8343c9e21d8f0d00652b7"; // ✅ Default logo if no file is uploaded

    // ✅ Upload image only if file is provided
    if (file) {
      try {
        const uploadedResponse = await new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder: "insurance_companies", use_filename: true, unique_filename: false },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );
          uploadStream.end(file.buffer); // ✅ Send buffer instead of file path
        });

        companyLogo = uploadedResponse.secure_url; // ✅ Set Cloudinary URL
      } catch (uploadError) {
        return res.status(500).json({ message: "Image upload failed!", error: uploadError.message });
      }
    }

    // ✅ Save to MongoDB
    const newCompany = await InsuranceCompany.create({
      companyName,
      companyLogo, // ✅ Either Cloudinary URL or default
      contactNumber,
      insurancePlans: parsedPlans, // ✅ Already parsed array
    });

    res.status(201).json({ message: "Company added successfully!", data: newCompany });
  } catch (error) {
    res.status(500).json({ message: "Server error!", error: error.message });
  }
};

export const getCompanies = async (req, res) => {
  try {
    const companies = await InsuranceCompany.find().select("companyName companyLogo contactNumber insurancePlans createdAt");

    if (!companies.length) {
      return res.status(404).json({ success: false, message: "No companies found" });
    }

    res.status(200).json({ success: true, count: companies.length, data: companies });
  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).json({ success: false, message: "Server error, please try again later" });
  }
};
export const deleteInsuranceCompany = async (req, res) => {
  try {
      const { companyId } = req.params;

      // 🔍 Check if company exists
      const company = await InsuranceCompany.findById(companyId);
      if (!company) {
          return res.status(404).json({ success: false, message: "Company not found" });
      }

      // ❌ Delete the company
      await company.deleteOne();

      return res.status(200).json({
          success: true,
          message: "Company deleted successfully",
      });
  } catch (error) {
      console.error("❌ Error in deleteInsuranceCompany:", error.message);
      return res.status(500).json({
          success: false,
          message: "Internal Server Error",
      });
  }
};
