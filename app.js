import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log(" MongoDB connected"))
    .catch((err) => console.log(" DB Error:", err));

app.use("api/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({ msg: "Welcom to the auth API" });
});

app.listen(process.env.PORT, () => 
    console.log(`Server running on port ${process.env.PORT}`)
);