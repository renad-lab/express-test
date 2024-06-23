const express = require("express");
const fruits = express.Router();
const fruitsArray = require("../models/fruits");

fruits.get("/", (req, res) => {
  res.json(fruitsArray);
});

module.exports = fruits;
