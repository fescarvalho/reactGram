const mongoose = require("mongoose");

//connection
const conn = async () => {
  try {
    const dbConn = await mongoose.connect(process.env.DB_CONNECT);
    console.log("conncet to databe 👌");
    return dbConn;
  } catch (e) {
    console.log(e);
  }
};
k;
conn();

module.exports = conn;
