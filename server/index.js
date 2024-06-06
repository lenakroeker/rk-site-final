// index.js
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const newsRoute = require("./routes/news");
const projectRoute = require("./routes/project");
const adminRoutes = require("./routes/admin");
const eventRoutes = require("./routes/event");
const path = require("path");

const { run } = require("./mongoConnectionFile.js");

run().catch(console.error);

const cors = require("cors");

app.use(express.static(path.join(__dirname, "..", "client", "dist")));
// Express middleware to set CSP header with nonce value
app.use((req, res, next) => {
  // Generate a unique nonce value for each request
  const nonce = crypto.randomBytes(16).toString("base64");

  // Set the CSP header with the generated nonce value
  res.setHeader(
    "Content-Security-Policy",
    `script-src 'self' 'nonce-${nonce}'`
  );

  // Pass the nonce value to the template or HTML meta tag if needed
  res.locals.nonce = nonce;

  next();
});

// Put all API endpoints under '/api'
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

dotenv.config();

app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successful"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/news", newsRoute);
app.use("/api/projects", projectRoute);
app.use("/api/admin", adminRoutes);
app.use("/api/events", eventRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("backend server is running!");
});
