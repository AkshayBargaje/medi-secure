import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionurl =
  "mongodb+srv://akshaybargaje:Akshay2002@cluster0.dzcsn8d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectdb = async () => {
  try {
    mongoose
      .connect(connectionurl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(`Application is connected to Database 😃`);
      });
  } catch (error) {
    console.log(error);
  }
};
