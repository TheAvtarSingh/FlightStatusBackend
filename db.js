import mongoose from "mongoose";

const mongodb = async (MONGO_URI) => {
  await mongoose
    .connect(MONGO_URI, {
      dbName: "flightstatus",
    })
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((e) => {
      console.log(e);
    });
};

export default mongodb;
