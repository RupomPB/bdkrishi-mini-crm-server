import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import { protect } from "./middleware/authMiddleware.js";
import customerRoutes from "./routes/customerRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";


dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/dashboard", dashboardRoutes);


// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 BDKrishi Mini CRM API Running",
  });
});


app.get("/api/profile", protect, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server Running on Port ${PORT}`);
});