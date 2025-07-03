import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"; 
import complaintRoutes from "./routes/complaintRoutes.js";

dotenv.config();
connectDB();

const app = express(); 

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes); 
app.use("/api/complaints", complaintRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 NagarSeva Backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

