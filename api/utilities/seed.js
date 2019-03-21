const mongoose = require("mongoose");

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
    createDrink();
  })
  .catch(error => {
    console.log(error);
  });

clearDatabase = () => {
  Drink.deleteMany({}, err => {
    console.log("Drinks collection dropped");
  });
};

const createDrink = () => {
  feedData.forEach((item, key, arr) => {
    drink = buildDrinkModel(item);

    drink
      .save()
      .then(drink => {
        console.log(drink);
        if (key === arr.length - 1) {
          mongoose.disconnect();
        }
      })
      .catch(err => {
        console.log(err);
      });
  });
};

const buildDrinkModel = options => {
  switch (options.type) {
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

const feedData = [
  {
    type: "beer",
    name: "Dragon's Milk",
    tastingNotes: "Dark and Rich",
    comments: "pairs well with prototyping in JavaScript",
    image: "https://drive.google.com/uc?id=1tww2Kuvfau9Aycsztaqn4ad_3dAxQsbg",
    rating: 3,
    style: "Stout aged in Bourbon Casks",
    source: "New Holland Brewing"
  },
  {
    type: "coffee",
    name: "Gingerbread Cold Brew",
    tastingNotes: "slightly spicy with a hint of orange",
    comments: "",
    image: "https://drive.google.com/uc?id=1uJYP10MqNfEBDjlCmW5cH07X7jXEO9kL",
    rating: 4,
    beanType: "Arabica",
    brewType: "Cold Brew",
    strength: 3
  },
  {
    type: "liquor",
    name: "Angel's Envy",
    tastingNotes: "smooth yet fiery, finishes with a hint of port",
    comments: "excellent!",
    image: "https://drive.google.com/uc?id=1zirJRp-8-yriFhphAF7OQcOZDKdWFI9G",
    rating: 5,
    typeOfLiquor: "Bourbon"
  },
  {
    type: "tea",
    name: "Laager",
    tastingNotes: "delicate and fruity",
    comments: "great African tea!",
    image: "https://drive.google.com/uc?id=11fPYwF4LVx1ixVOBrWXlkiHet6X1adeL",
    rating: 4,
    leafType: "Red",
    steepTime: 5
  },
  {
    type: "beer",
    name: "Dragon's Milk",
    tastingNotes: "Dark and Rich",
    comments: "pairs well with prototyping in JavaScript",
    image: "https://drive.google.com/uc?id=1tww2Kuvfau9Aycsztaqn4ad_3dAxQsbg",
    rating: 3,
    style: "Stout aged in Bourbon Casks",
    source: "New Holland Brewing"
  },
  {
    type: "coffee",
    name: "Gingerbread Cold Brew",
    tastingNotes: "slightly spicy with a hint of orange",
    comments: "",
    image: "https://drive.google.com/uc?id=1uJYP10MqNfEBDjlCmW5cH07X7jXEO9kL",
    rating: 4,
    beanType: "Arabica",
    brewType: "Cold Brew",
    strength: 3
  },
  {
    type: "liquor",
    name: "Angel's Envy",
    tastingNotes: "smooth yet fiery, finishes with a hint of port",
    comments: "excellent!",
    image: "https://drive.google.com/uc?id=1zirJRp-8-yriFhphAF7OQcOZDKdWFI9G",
    rating: 5,
    typeOfLiquor: "Bourbon"
  },
  {
    type: "tea",
    name: "Laager",
    tastingNotes: "delicate and fruity",
    comments: "great African tea!",
    image: "https://drive.google.com/uc?id=11fPYwF4LVx1ixVOBrWXlkiHet6X1adeL",
    rating: 4,
    leafType: "Red",
    steepTime: 5
  },
  {
    type: "beer",
    name: "Dragon's Milk",
    tastingNotes: "Dark and Rich",
    comments: "pairs well with prototyping in JavaScript",
    image: "https://drive.google.com/uc?id=1tww2Kuvfau9Aycsztaqn4ad_3dAxQsbg",
    rating: 3,
    style: "Stout aged in Bourbon Casks",
    source: "New Holland Brewing"
  },
  {
    type: "coffee",
    name: "Gingerbread Cold Brew",
    tastingNotes: "slightly spicy with a hint of orange",
    comments: "",
    image: "https://drive.google.com/uc?id=1uJYP10MqNfEBDjlCmW5cH07X7jXEO9kL",
    rating: 4,
    beanType: "Arabica",
    brewType: "Cold Brew",
    strength: 5
  },
  {
    type: "liquor",
    name: "Angel's Envy",
    tastingNotes: "smooth yet fiery, finishes with a hint of port",
    comments: "excellent!",
    image: "https://drive.google.com/uc?id=1zirJRp-8-yriFhphAF7OQcOZDKdWFI9G",
    rating: 5,
    typeOfLiquor: "Bourbon"
  },
  {
    type: "tea",
    name: "Laager",
    tastingNotes: "delicate and fruity",
    comments: "great African tea!",
    image: "https://drive.google.com/uc?id=11fPYwF4LVx1ixVOBrWXlkiHet6X1adeL",
    rating: 4,
    leafType: "Red",
    steepTime: 6
  }
];
