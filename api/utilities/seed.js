const mongoose = require("mongoose");
const faker = require("faker");

const Tea = require("../models/tea");
const Coffee = require("../models/coffee");
const Beer = require("../models/beer");
const Liquor = require("../models/liquor");

// Seed DB
mongoose
  .connect("mongodb://localhost:27017/devbev", { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .then(() => {
    clearDatabase();
  })
  .then(() => {
    createDrink(); // Takes a number argumnet to determin how many drinks to create (20 default)
  })
  .catch(error => {
    console.log(error);
  });

clearDatabase = () => {
  Drink.deleteMany({}, err => {
    console.log("collection removed");
  });
};

const createDrink = (num = 20) => {
  const types = ["beer", "liquor", "tea", "coffee"];

  [...Array(num)].forEach((_, i) => {
    let type = types[Math.floor(Math.random() * types.length)];
    let newDrink = buildDrinkModel(type);

    newDrink
      .save()
      .then(drink => {
        console.log(drink);
      })
      .catch(err => {
        console.log(err);
      });
  });
};

const buildDrinkModel = type => {
  let options = { ...baseOptions(), ...drinkOptions(type) };

  switch (type) {
    case "beer":
      return new Beer(options);
    case "tea":
      return new Tea(options);
    case "coffee":
      return new Coffee(options);
    case "liquor":
      return new Liquor(options);
  }
};

const baseOptions = () => {
  return {
    name: faker.lorem.word(),
    tasting_notes: faker.lorem.word(),
    comments: faker.lorem.words(),
    image: "https://via.placeholder.com/1200",
    rating: Math.floor(Math.random() * 5) + 1
  };
};

const drinkOptions = type => {
  let options = {};
  options.type = type;

  switch (type) {
    case "beer":
      options.style = faker.lorem.word();
      options.source = faker.lorem.word();
      break;
    case "tea":
      options.leaf_type = faker.lorem.word();
      options.steep_time = Math.floor(Math.random() * 8) + 1;
      break;
    case "coffee":
      options.bean_type = faker.lorem.word();
      options.brew_type = faker.lorem.word();
      options.strength = Math.floor(Math.random() * 5) + 1;
      break;
    case "liquor":
      options.type = faker.lorem.word();
      break;
  }

  return options;
};
