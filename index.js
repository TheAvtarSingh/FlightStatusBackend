import express from "express";
import dotenv from "dotenv";
import mongodb from "./db.js";
const app = express();

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongodb(MONGO_URI);

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT} `);
});
