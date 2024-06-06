const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    text: { type: String, required: true },
    date: { type: String, required: false },
    images: { type: [String], required: false }, // Array to hold image URLs
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", NewsSchema);
