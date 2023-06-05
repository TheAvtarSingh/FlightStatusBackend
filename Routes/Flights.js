import express from "express";

const router = express.Router();

import Status from "../models/status.js";

const checkEmpty = (data) => {
  return Object.keys(data).length === 0;
};

router.post("/getStatus", async (req, res) => {
  const { Source, Destination, Date } = req.body;

  try {
    const data = await Status.find({
      Source: Source,
      Destination: Destination,
      Date: Date,
    });

    res.send({ message: data });
  } catch (e) {
    res.send(e);
  }
});

router.post("/addStatus", async (req, res) => {
  const { Source, Destination, Date, Flight, Price } = req.body;
  try {
    const finddata = await Status.findOne({
      Source: Source,
      Destination: Destination,
      Date: Date,
      Flight: Flight,
      Price: Price,
    });
    if (!finddata) {
      const data = await Status.create({
        Source: Source,
        Destination: Destination,
        Date: Date,
        Flight: Flight,
        Price: Price,
      });
      res.json({ success: true });
    } else {
      res.json({
        message: "Data Already Exists",
      });
    }
  } catch (e) {
    res.json({ success: false });
  }
});

export default router;
