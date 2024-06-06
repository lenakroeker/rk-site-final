const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    location: { type: String, required: false },
    images: { type: [String], required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
