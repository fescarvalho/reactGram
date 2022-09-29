const mongoose = require("mongoose");

//connection
const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      "mongodb+srv://fescarvalho:f1f2j3p4@cluster0.5lsogdu.mongodb.net/?retryWrites=true&w=majority",
    );
    console.log("connect to database 👌");
    return dbConn;
  } catch (e) {
    console.log(e);
  }
};

conn();

module.exports = conn;
