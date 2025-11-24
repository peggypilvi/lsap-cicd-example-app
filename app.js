// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1>Welcome to the CI/CD Workshop!</h1>");
});

app.get("/time", (req, res) => {
  const currentTime = new Date().toISOString();
  res.json({ time: currentTime });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

module.exports = app;
