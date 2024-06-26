const mongoose = require("mongoose");

const EssaySchema = new mongoose.Schema(
  {
    title: { type: String, required: false, unique: true },
    text: { type: String, required: false },
    date: { type: Date, required: true },
    images: { type: [String], required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Essay", EssaySchema);
