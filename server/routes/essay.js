const express = require("express");
const router = express.Router();
const Essay = require("../models/Essay");
const authenticateToken = require("./authenticateToken");

// GET essay by id
router.get("/find/:id", async (req, res) => {
  try {
    const essay = await Essay.findById(req.params.id);
    if (essay) {
      res.status(200).json(essay);
    } else {
      res.status(404).json({ message: "Essay not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get 2 most recent Essay Essays

router.get("/recent", async (req, res) => {
  try {
    const essay = await Essay.find()
      .sort({ createdAt: -1 }) // Sort in descending order based on createdAt field
      .limit(2); // Limit the result to two entries
    res.status(200).json(essay);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all Essay
router.get("/", async (req, res) => {
  try {
    const essay = await Essay.find();
    res.status(200).json(essay);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE Essay Essay
router.post("/", authenticateToken, async (req, res) => {
  const newEssay = new Essay(req.body);
  try {
    const savedEssay = await newEssay.save();
    res.status(201).json(savedEssay);
  } catch (error) {
    res.status(500).json(error);
  }
});

// EDIT Essay by id
router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const updatedEssay = await Essay.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedEssay) {
      res.status(200).json(updatedEssay);
    } else {
      res.status(404).json({ message: "Essay not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE Essay by id
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const deletedEssay = await Essay.findByIdAndDelete(req.params.id);
    if (deletedEssay) {
      res.status(200).json({ message: "Essay deleted successfully" });
    } else {
      res.status(404).json({ message: "Essay not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
