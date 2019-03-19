const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");

const app = express();

// Model require
const beer = require('./models/beer');
const coffee = require('./models/coffee');
const drink = require('./models/drink');
const liquor = require('./models/liquor');
const tea = require('./models/tea');

mongoose
  .connect("mongodb://localhost:27017/devbev", { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(error => {
    console.log(error);
  });

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => res.send("serving the devbev"));

app.listen(8000, "localhost", () => {
  console.log("listening on port 8000");
});
