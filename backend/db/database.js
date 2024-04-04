import mongoose from "mongoose";

const database = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("🍃 MonogoDB connection established!");
  } catch (error) {
    console.log("🍃 MonogoDB connection error: ", error.message);
  }
};

export default database;
