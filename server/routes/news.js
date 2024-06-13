const express = require("express");
const router = express.Router();
const News = require("../models/News");
const authenticateToken = require("./authenticateToken");

// GET news item by ID
router.get("/find/:id", async (req, res) => {
  try {
    const article = await News.findById(req.params.id);
    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404).json({ message: "News article not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get 2 most recent news articles

router.get("/recent", async (req, res) => {
  try {
    const news = await News.find()
      .sort({ createdAt: -1 }) // Sort in descending order based on createdAt field
      .limit(2); // Limit the result to two entries
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all news
router.get("/", async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE news article
router.post("/", authenticateToken, async (req, res) => {
  const newArticle = new News(req.body);
  try {
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(500).json(error);
  }
});

// EDIT article by id
router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const updatedArticle = await News.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedProject) {
      res.status(200).json(updatedArticle);
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE article by id
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const deletedArticle = await Project.findByIdAndDelete(req.params.id);
    if (deletedArticle) {
      res.status(200).json({ message: "Article deleted successfully" });
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
