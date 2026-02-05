const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/Form_db");
    console.log(`MongoDb Connected : ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error :  ${err.message}`);
    process.exit();
  }
};

module.exports = connectDB;
