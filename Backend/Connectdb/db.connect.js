const mongoose = require("mongoose");
require("dotenv").config(); 

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI; 
    if (!uri) {
      throw new Error("❌ MONGO_URI not found in .env file");
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
