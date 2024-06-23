// // app.js

// const express = require("express");
// const app = express();
// const fruits = require("./models/fruits"); // Assuming this exports an array of fruits

// // Basic route
// app.get("/", (req, res) => {
//   res.send("Hello!");
// });

// // Route to get all fruits
// app.get("/fruits", (req, res) => {
//   res.send(fruits); // Return all fruits as JSON
// });

// // Route to get a specific fruit by name
// app.get("/fruits/:fruitName", (req, res) => {
//   let { fruitName } = req.params;
//   fruitName = fruitName.toLowerCase(); // Convert fruitName to lowercase

//   // Filter fruits array by fruitName (case-insensitive)
//   const foundFruit = fruits.filter(
//     (fruit) => fruit.name.toLowerCase() === fruitName
//   );

//   res.json(foundFruit); // Return found fruit(s) as JSON
// });

// // Route to search for fruits by family using query parameter
// app.get("/fruits/search", (req, res) => {
//   const { family, calories, fat } = req.query;
//   res.send(req.query);
//   // Filter fruits array by family
// });

// module.exports = app;

const express = require("express");
const app = express();

const fruitsController = require("./controllers/fruitsController");

// HomePage
app.get("/", (request, response) => {
  response.send(`Hello!`);
});

// Fruits Routes
app.use("/fruits", fruitsController);

module.exports = app;
