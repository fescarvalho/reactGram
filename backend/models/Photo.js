const mongoose = require("mongoose");
const { Schema } = require(mongoose);

const photoSchema = new Schema(
  {
    image: String,
    title: String,
    likes: Array,
    comments: Array,
    userID: mongoose.ObjectId,
    userName: String,
  },
  {
    timestamp: true,
  }
);

const Photo = mongoose.model("Photos", photoSchema);
module.exports = Photo;
