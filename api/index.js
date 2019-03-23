// Dependencies
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const {
  ObjectID
} = require('mongodb');

// Initialize the Express App
const app = express();

// Local files required
const Beer = require('./models/beer');
const Coffee = require('./models/coffee');
const Liquor = require('./models/liquor');
const Tea = require('./models/tea');
const Drink = require('./models/drink');
const routeDrinks = require('./routes/drinks');

// Mongoose Connect
mongoose
  .connect("mongodb://localhost:27017/devbev", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(error => {
    console.log(error);
  });

// Apply body Parser and server public assets and routes
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// GET by type and display name, image, rating
app.get("/drinks", routeDrinks.getByTypeOrAll);

// GET by ID and display all info
app.get('/drinks/:id', routeDrinks.getIndividualDrink);

// POST /drink
app.post('/drinks', routeDrinks.postDrinks);

// Start app
app.listen(8000, "localhost", () => {
  console.log("listening on port 8000");
});