import express from "express";
import connectDB from "./Connectdb/db.connect.js";
import dotenv from "dotenv";

dotenv.config(); 

const app = express();

connectDB();

const PORT = process.env.PORTADDRESS || 5000;

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
