// Dependencies
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

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
  }`;
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
// GET by ID and display all info
// POST /drink
// DELETE /drink/:id
// Update /drink/:id
app.get("/drinks", routeDrinks.getByTypeOrAll);
app.get("/drinks/:id", routeDrinks.getIndividualDrink);
app.post("/drinks", routeDrinks.postDrinks);
app.delete("/drinks/:id", routeDrinks.deleteDrink);
app.patch("/drinks/:id", routeDrinks.updateDrink);

// GITHUB LOGIN
app.get("/auth/github/callback", routeAuth);

app.get("/auth/github/callback?*")

// Start app
app.listen(global.gConfig.NODE_PORT, () => {
  console.log(`listening on port ${global.gConfig.NODE_PORT}`);
});

module.exports = { app };
