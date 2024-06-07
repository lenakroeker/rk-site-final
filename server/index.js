const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const crypto = require("crypto");
const cors = require("cors");

const newsRoute = require("./routes/news");
const projectRoute = require("./routes/project");
const adminRoutes = require("./routes/admin");
const eventRoutes = require("./routes/event");
const { run } = require("./mongoConnectionFile.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.error(err));

// Run MongoDB function
run().catch(console.error);

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "client", "dist")));

// Set CSP header with nonce value
app.use((req, res, next) => {
  const nonce = crypto.randomBytes(16).toString("base64");
  res.setHeader(
    "Content-Security-Policy",
    `script-src 'self' 'nonce-${nonce}'`
  );
  res.locals.nonce = nonce;
  next();
});

// API routes
app.use("/api/news", newsRoute);
app.use("/api/projects", projectRoute);
app.use("/api/admin", adminRoutes);
app.use("/api/events", eventRoutes);

// API endpoint
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

// Catchall handler for React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}!`);
});
