import dotenv from "dotenv";
import connectDB from "./Database/index.js";
import { app } from "./app.js";

// Load environment variables
dotenv.config({ path: "./.env" });

// Function to start the server
const startServer = async () => {
  try {
    // Connect to the MongoDB database
    await connectDB();

    // Error handling for the app
    app.on("error", (error) => {
      console.error("Error:", error);
      throw error;
    });

    // Start the Express server
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1); // Exit if the MongoDB connection fails
  }
};

// Call the function to start the server
startServer();
