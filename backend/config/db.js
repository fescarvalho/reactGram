const mongoose = require("mongoose");

//connection
const conn = async () => {
  try {
    const dbConn = await mongoose.connect(process.env.DB_CONNECT);
    console.log("connect to database 👌");
    return dbConn;
  } catch (e) {
    console.log(e);
  }
};

conn();

module.exports = conn;
