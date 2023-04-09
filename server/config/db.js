const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
  const MONGO_URI =
    "mongodb+srv://merndeveloper:mern123@cluster0.gdzdkcv.mongodb.net/merndata?retryWrites=true&w=majority";

  const conn = await mongoose.connect(MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
