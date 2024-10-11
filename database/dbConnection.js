import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

export const dbConnection = () => {
  const connectionString = 'mongodb+srv://priyapatel100506:priya100506@cluster0.zh81m.mongodb.net/restaurant'; 

  mongoose
    .connect(connectionString, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch((err) => {
      console.log(`Error occurred while connecting to the database: ${err}`);
    });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose connection is disconnected.");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("Mongoose connection is reconnected.");
  });
};


