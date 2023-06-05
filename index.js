// Imports

import express from "express";
import dotenv from "dotenv";
import mongodb from "./db.js";
import Flights from "./Routes/Flights.js";
import cors from "cors";
// Use App
const app = express();

// Middleware

app.use(express.json());

// Routes
app.get("/", () => {
  res.send("Hello World");
});

app.use("/api", Flights);

// Cors
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Dotenv + DB

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongodb(MONGO_URI);

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT} `);
});
