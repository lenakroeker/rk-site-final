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

// GET event by ID
router.get("/find/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ message: "event not found" });
    }
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

// EDIT event by id
router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedEvent) {
      res.status(200).json(updatedEvent);
    } else {
      res.status(404).json({ message: "event not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE event by id
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (deletedEvent) {
      res.status(200).json({ message: "event deleted successfully" });
    } else {
      res.status(404).json({ message: "event not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
