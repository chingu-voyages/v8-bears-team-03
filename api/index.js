// Dependencies
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// Initialize the Express App
const app = express();

// Models required
const Beer = require('./models/beer');
const Coffee = require('./models/coffee');
const Liquor = require('./models/liquor');
const Tea = require('./models/tea');
const Drink = require('./models/drink');

// Mongoose Connect
mongoose
  .connect("mongodb://localhost:27017/devbev", { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(error => {
    console.log(error);
  });

// Apply body Parser and server public assets and routes
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// GET by type and display name, image, rating
app.get("/drinks", (req, res) => {
  let type = req.query.type;
  
  // Checks if /drinks?type=<case> then displays
  switch (type) {
    case 'beer':
      Promise.all([Beer.find().select('name image rating -_id').exec()])
        .then(([beer]) => res.json({beer}));
      break;
    case 'tea':
      Promise.all([Tea.find().select('name image rating -_id').exec()])
        .then(([tea]) => res.json({tea}));
      break;
    case 'coffee':
      Promise.all([Coffee.find().select('name image rating -_id').exec()])
        .then(([coffee]) => res.json({coffee}));
      break;
    case 'liquor':
      Promise.all([Liquor.find().select('name image rating -_id').exec()])
        .then(([liquor]) => res.json({liquor}));
      break;
    // Displays everything as default
    default:
    Promise.all([
      Drink.find().select('name image rating -_id').exec(),
    ]).then(([drink]) => 
      res.json({drink}));
      break;
  }
});

// GET by ID and display all info
app.get('/drinks/:id', (req, res) => {
  let id = req.params.id;

  // Show everything but id and v
  Drink.findById(id).select('-_id -__v').then((drink) => {
    // Check if theres that drink
    if (!drink) {
      return res.status(401).send('That drink isnt here');
    }

    // If there is, then send it back
    res.send({drink});
  }, (e) => {
    res.status(400).send(e);
  })
});

// POST /drink
app.post('/drinks', (req, res) => { 
  let type = req.body.type;
  let newDrink;

  // Determine which type and store it as that type
  switch (type) {
    case 'beer':
      newDrink = new Beer({
        type,
        name: req.body.name,
        style: req.body.style,
        source: req.body.source,
        tastingNotes: req.body.tastingNotes,
        comments: req.body.comments,
        image: req.body.image,
        rating: req.body.rating
      });
      break;
    case 'coffee':
      newDrink = new Coffee({
        type,
        name: req.body.name,
        beanType: req.body.beanType,
        brewTime: req.body.brewTime,
        strength: req.body.strength,
        tastingNotes: req.body.tastingNotes,
        comments: req.body.comments,
        image: req.body.image,
        rating: req.body.rating
      });
      break;
    case 'liquor':
      newDrink = new Liquor({
        type,
        name: req.body.name,
        tastingNotes: req.body.tastingNotes,
        comments: req.body.comments,
        image: req.body.image,
        rating: req.body.rating
      });
      break;
    case 'tea':
      newDrink = new Tea({
        type,
        name: req.body.name,
        leafType: req.body.leafType,
        steepTime: req.body.steepTime,
        tastingNotes: req.body.tastingNotes,
        comments: req.body.comments,
        image: req.body.image,
        rating: req.body.rating
      });
      break;
    default: 
      console.log('Please select an apprioriate drink');
      break;
    }

  // Saves POST and sends it back as well. If not, then error
  newDrink.save().then((drink) => {
    res.send(drink);
  }, (e) => {
    res.status(400).send(e);
  });
});

// Start app
app.listen(8000, "localhost", () => {
  console.log("listening on port 8000");
});
