const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const authenticateToken = require("./authenticateToken");

// GET project by id
router.get("/find/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new project
router.post("/", authenticateToken, async (req, res) => {
  const newProject = new Project(req.body);
  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json("router error" + error);
  }
});

module.exports = router;
