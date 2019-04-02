// Dependencies
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const {ObjectID} = require("mongodb");

// Initialize the Express App
const app = express();

// Local files required
const Beer = require("./models/beer");
const Coffee = require("./models/coffee");
const Liquor = require("./models/liquor");
const Tea = require("./models/tea");
const Drink = require("./models/drink");
const User = require("./models/user");
const routeDrinks = require("./routes/drinks");
const routeAuth = require("./routes/auth");

// Set environment variables
const config = require("./utilities/config");

let dbUrl;

if (process.env.NODE_ENV === "production") {
  dbUrl = `mongodb://${global.gConfig.MONGO_USERNAME}:${
    global.gConfig.MONGO_PASSWORD
  }@${global.gConfig.MONGO_HOSTNAME}:${global.gConfig.MONGO_PORT}/${
    global.gConfig.MONGO_DB
  }?authSource=admin`;
} else {
  dbUrl = `mongodb://${global.gConfig.MONGO_HOSTNAME}:${
    global.gConfig.MONGO_PORT
  }/${global.gConfig.MONGO_DB}`;
}

console.log(`${global.gConfig.CONFIG_ID} variables loaded`);

// Mongoose Connect
mongoose
  .connect(dbUrl, {
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
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cors());

// GET by type and display name, image, rating
app.get("/drinks", routeDrinks.getByTypeOrAll);

// GET by ID and display all info
app.get("/drinks/:id", routeDrinks.getIndividualDrink);

// GITHUB LOGIN
app.get("/auth/github/callback", routeAuth);

// POST /drink
app.post("/drinks", routeDrinks.postDrinks);

// Start app
app.listen(global.gConfig.NODE_PORT, () => {
  console.log(`listening on port ${global.gConfig.NODE_PORT}`);
});

module.exports = {app};