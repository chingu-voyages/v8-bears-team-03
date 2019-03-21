// Dependencies
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

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

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// GET all drinks name, image and rating 
app.get("/drink", (req, res) => {
  Promise.all([
    Tea.find().select('name image rating -_id').exec(),
    Beer.find().select('name image rating -_id').exec(),
    Coffee.find().select('name image rating -_id').exec(),
    Liquor.find().select('name image rating -_id').exec()
  ]).then(([tea, beer, coffee, liquor]) => 
    res.json({tea, beer, coffee, liquor}));
});

app.get("/drinks", (req, res) => {
  let type = req.query.type;
  
  switch (type) {
    case 'beer':
      Promise.resolve(Beer.find().select('name image rating -_id').exec())
        .then(response => res.json(response));
      break;
    case 'tea':
      Promise.resolve(Tea.find().select('name image rating -_id').exec())
        .then(response => res.json(response));
      break;
    case 'coffee':
      Promise.resolve(Coffee.find().select('name image rating -_id').exec())
        .then(response => res.json(response));
      break;
    case 'liquor':
      Promise.resolve(Liquor.find().select('name image rating -_id').exec())
        .then(response => res.json(response));
      break;
    default:
      Promise.resolve(Drink.find().select('name image rating -_id').exec())
        .then(response => res.json(response));
      break;
  }
});

// POST /drink
app.post('/drink', (req, res) => { 
  let type = req.body.type;
  let newDrink;

  // Determine which type and store it as that type
  switch (type) {
    case 'beer':
      newDrink = new Beer({
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
        name: req.body.name,
        tastingNotes: req.body.tastingNotes,
        comments: req.body.comments,
        image: req.body.image,
        rating: req.body.rating
      });
      break;
    case 'tea':
      newDrink = new Tea({
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

  newDrink.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(8000, "localhost", () => {
  console.log("listening on port 8000");
});
