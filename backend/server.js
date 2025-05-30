import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routeer from "./route/routeer.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/taks", routeer);
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");
  } catch (error) {
    console.log("db is not connected", error.message);
  }
};
dbConnect();

app.get("/", (req, res) => {
  res.send("i am ok");
});
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`server is running${PORT}`);
});
