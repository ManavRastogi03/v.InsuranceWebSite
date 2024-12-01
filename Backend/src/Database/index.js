import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstant = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: DBHost: ${connectionInstant.connection.host}`);
  } catch (error) {
    console.log("Error:", error);
    process.exit(1);
  }
};

export default connectDB;
