const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: { type: String, required: false, unique: true },
    text: { type: String, required: false },
    date: { type: Date, required: true },
    url: { type: String, required: false },
    images: { type: [String], required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", NewsSchema);
