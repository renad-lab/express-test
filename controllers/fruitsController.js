// const express = require("express");
// const fruits = express.Router();
// const fruitsArray = require("../models/fruits");

// fruits.get("/", (req, res) => {
//   res.json(fruitsArray);
// });

// module.exports = fruits;

const express = require("express");
const fruits = express.Router();

const fruitsData = require("../models/fruits");

//     "/fruits"
fruits.get("/", (request, response) => {
  response.json(fruitsData);
});

// "fruits/search?calories=103"
fruits.get("/search", (request, response) => {
  const { calories } = request.query;
  const fruitsWithCalories = fruitsData.filter(
    (fruit) => Number(fruit.nutritions.calories) <= Number(calories)
  );
  response.json(fruitsWithCalories);
});

// "fruits/Strawberry"
fruits.get("/:fruitName", (request, response) => {
  const { fruitName } = request.params;
  const foundFruit = fruitsData.filter(
    (fruit) => fruit.name.toLowerCase() === fruitName.toLowerCase()
  );
  response.json(foundFruit[0]);
});

module.exports = fruits;
