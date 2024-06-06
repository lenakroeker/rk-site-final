const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    location: { type: String, required: false },
    date: { type: Date, required: true },
    link: { type: String, required: false }, // Array to hold image URLs
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
