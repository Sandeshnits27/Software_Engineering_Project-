import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Connectdb/db.connect.js";
import authRoutes from "./Routes/auth.routes.js";

dotenv.config();

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Server
const PORT = process.env.PORTADDRESS || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
