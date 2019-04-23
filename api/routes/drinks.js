const validateDrinkInput = require("../validation/drink");
const replaceEmptyAttributes = require("../utilities/modelHelpers");
const { ObjectID } = require("mongodb");
const _ = require("lodash");

// GET by type
// Default is return all drinks
exports.getByTypeOrAll = (req, res) => {
  let type = req.query.type;

  // Checks if /drinks?type=<case> then displays
  switch (type) {
    case "beer":
      Promise.all([
        Beer.find()
          .select("name image rating _id")
          .exec()
      ]).then(([drinks]) =>
        res.json({
          drinks
        })
      );
      break;
    case "tea":
      Promise.all([
        Tea.find()
          .select("name image rating _id")
          .exec()
      ]).then(([drinks]) =>
        res.json({
          drinks
        })
      );
      break;
    case "coffee":
      Promise.all([
        Coffee.find()
          .select("name image rating _id")
          .exec()
      ]).then(([drinks]) =>
        res.json({
          drinks
        })
      );
      break;
    case "liquor":
      Promise.all([
        Liquor.find()
          .select("name image rating _id")
          .exec()
      ]).then(([drinks]) =>
        res.json({
          drinks
        })
      );
      break;
    // Displays everything as default
    default:
      Promise.all([
        Drink.find()
          .select("name image rating type _id")
          .exec()
      ]).then(([drinks]) =>
        res.json({
          drinks
        })
      );
      break;
  }
};

// GET by ID
exports.getIndividualDrink = (req, res) => {
  let id = req.params.id;

  // Show everything but id and v
  Drink.findById(id)
    .select("-_id -__v")
    .then(
      drink => {
        // Check if theres that drink and ID is valid
        if (!drink && !ObjectID.isValid(id)) {
          return res.status(401).send();
        }

        // If there is, then send it back
        res.send({
          drink
        });
      },
      e => {
        res.status(400).send(e);
      }
    );
};

// POST a drink
exports.postDrinks = (req, res) => {
  const { error } = validateDrinkInput(req.body);

  if (error) return res.status(400).json(error);

  let user;
  let type = req.body.type;
  let newDrink;

  drinkFields = replaceEmptyAttributes(req.body);

  // Default Drink Fields
  let defaultFields = {
    name: drinkFields.name,
    tastingNotes: drinkFields.tastingNotes,
    comments: drinkFields.comments,
    image: drinkFields.image,
    rating: drinkFields.rating,
    user
  };

  // Determine which type and store it as that type
  switch (type) {
    case "beer":
      newDrink = new Beer({
        ...defaultFields,
        style: drinkFields.style,
        source: drinkFields.source
      });
      break;
    case "coffee":
      newDrink = new Coffee({
        ...defaultFields,
        beanType: drinkFields.beanType,
        brewTime: drinkFields.brewTime,
        strength: drinkFields.strength
      });
      break;
    case "liquor":
      newDrink = new Liquor({
        ...defaultFields,
        typOfLiquor: drinkFields.typOfLiquor
      });
      break;
    case "tea":
      newDrink = new Tea({
        ...defaultFields,
        leafType: drinkFields.leafType,
        steepTime: drinkFields.steepTime
      });
      break;
    default:
      console.log("Please select an apprioriate drink");
      break;
  }

  // Saves POST and sends it back as well. If not, then error
  newDrink.save().then(
    drink => {
      res.send(drink);
    },
    e => {
      res.status(400).send(e);
    }
  );
};

// Delete a Drink
exports.deleteDrink = (req, res) => {
  let id = req.params.id;

  // Validate ID
  if (!ObjectID.isValid(id)) return res.status(404).send();

  Drink.findByIdAndRemove(id).then((drink) => {
    if (!drink) return res.status(404).send();
  
    res.send({drink});
  }).catch(e => {
    res.status(400).send();
  });

};

// Update a Drink
exports.updateDrink = (req, res) => {
  let id = req.params.id;

  // All fields except Image
  const updatableFields = ["name", "tastingNotes", "comments", "rating", 
  "style", "source", "beanType", "brewTime", 
  "strength", "typeOfLiquor", "leafType", "steepTime" ];

  let body = _.pick(req.body, ...updatableFields);

  // Validate ID
  if (!ObjectID.isValid(id)) return res.status(404).send();

  Drink.findByIdAndUpdate(id, {$set: body}, {new: true}).then(drink => {
    if (!drink) return res.status(400).send();

    res.send({drink});
  }).catch(e => {
    res.status(400).send();
  });
};