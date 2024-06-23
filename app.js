// app.js

const express = require("express");
const app = express();
const fruits = require("./models/fruits"); // Assuming this exports an array of fruits
const fruitsController = require("./controllers/fruitsController");

// Basic route
app.get("/", (req, res) => {
  res.send("Hello!");
});

// Route to get all fruits
app.get("/fruits", (req, res) => {
  res.json(fruits); // Return all fruits as JSON
});

// Route to get a specific fruit by name
app.get("/fruits/:fruitName", (req, res) => {
  let { fruitName } = req.params;
  fruitName = fruitName.toLowerCase(); // Convert fruitName to lowercase

  // Filter fruits array by fruitName (case-insensitive)
  const foundFruit = fruits.filter(
    (fruit) => fruit.name.toLowerCase() === fruitName
  );

  //   // Check if foundFruit array is empty
  //   if (foundFruit.length === 0) {
  //     return res.status(404).json({ error: "Fruit not found" }); // Return 404 if no fruit found
  //   }

  res.json(foundFruit); // Return found fruit(s) as JSON
});

module.exports = app;
