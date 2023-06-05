import mongoose from "mongoose";

const { Schema } = mongoose;

const flightData = new Schema({
  Source: {
    type: String,
    required: true,
  },
  Destination: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  Flight: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
});

var result = mongoose.model("status", flightData);

export default result;
