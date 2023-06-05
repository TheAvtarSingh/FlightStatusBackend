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

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", Flights);

// Dotenv + DB

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongodb(MONGO_URI);

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT} `);
});
