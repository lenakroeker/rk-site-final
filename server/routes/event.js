const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const authenticateToken = require("./authenticateToken");

// GET all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new event
router.post("/", authenticateToken, async (req, res) => {
  const newEvent = new Event(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json("router error" + error);
  }
});

module.exports = router;
