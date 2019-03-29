const mongoose = require("mongoose");

const Tea = require("../models/tea");
const Coffee = require("../models/coffee");
const Beer = require("../models/beer");
const Liquor = require("../models/liquor");

// Seed DB
mongoose
  .connect("mongodb://localhost:27017/devbev", {
    useNewUrlParser: true
  })
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

const feedData = [{
    type: "beer",
    name: "Dragon's Milk",
    tastingNotes: "Dark and Rich",
    comments: "pairs well with prototyping in JavaScript",
    image: "v1553796035/drinkImages/jamz5it9b0qeo06lqasq",
    rating: 3,
    style: "Stout aged in Bourbon Casks",
    source: "New Holland Brewing"
  },
  {
    type: "coffee",
    name: "Gingerbread Cold Brew",
    tastingNotes: "slightly spicy with a hint of orange",
    comments: "",
    image: "v1553796799/drinkImages/u0egi5gpb6gw8h9makff",
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
    image: "v1553796896/drinkImages/vznl3uuxabrcpm4y5rxn",
    rating: 5,
    typeOfLiquor: "Bourbon"
  },
  {
    type: "tea",
    name: "Laager",
    tastingNotes: "delicate and fruity",
    comments: "great African tea!",
    image: "v1553796967/drinkImages/slm2vndz6ikn3ntdit5b",
    rating: 4,
    leafType: "Red",
    steepTime: 5
  },
  // {
  //   type: "beer",
  //   name: "Dragon's Milk",
  //   tastingNotes: "Dark and Rich",
  //   comments: "pairs well with prototyping in JavaScript",
  //   image: "https://drive.google.com/uc?id=1tww2Kuvfau9Aycsztaqn4ad_3dAxQsbg",
  //   rating: 3,
  //   style: "Stout aged in Bourbon Casks",
  //   source: "New Holland Brewing"
  // },
  // {
  //   type: "coffee",
  //   name: "Gingerbread Cold Brew",
  //   tastingNotes: "slightly spicy with a hint of orange",
  //   comments: "",
  //   image: "https://drive.google.com/uc?id=1uJYP10MqNfEBDjlCmW5cH07X7jXEO9kL",
  //   rating: 4,
  //   beanType: "Arabica",
  //   brewType: "Cold Brew",
  //   strength: 3
  // },
  // {
  //   type: "liquor",
  //   name: "Angel's Envy",
  //   tastingNotes: "smooth yet fiery, finishes with a hint of port",
  //   comments: "excellent!",
  //   image: "https://drive.google.com/uc?id=1zirJRp-8-yriFhphAF7OQcOZDKdWFI9G",
  //   rating: 5,
  //   typeOfLiquor: "Bourbon"
  // },
  // {
  //   type: "tea",
  //   name: "Laager",
  //   tastingNotes: "delicate and fruity",
  //   comments: "great African tea!",
  //   image: "https://drive.google.com/uc?id=11fPYwF4LVx1ixVOBrWXlkiHet6X1adeL",
  //   rating: 4,
  //   leafType: "Red",
  //   steepTime: 5
  // },
  // {
  //   type: "beer",
  //   name: "Dragon's Milk",
  //   tastingNotes: "Dark and Rich",
  //   comments: "pairs well with prototyping in JavaScript",
  //   image: "https://drive.google.com/uc?id=1tww2Kuvfau9Aycsztaqn4ad_3dAxQsbg",
  //   rating: 3,
  //   style: "Stout aged in Bourbon Casks",
  //   source: "New Holland Brewing"
  // },
  // {
  //   type: "coffee",
  //   name: "Gingerbread Cold Brew",
  //   tastingNotes: "slightly spicy with a hint of orange",
  //   comments: "",
  //   image: "https://drive.google.com/uc?id=1uJYP10MqNfEBDjlCmW5cH07X7jXEO9kL",
  //   rating: 4,
  //   beanType: "Arabica",
  //   brewType: "Cold Brew",
  //   strength: 5
  // },
  // {
  //   type: "liquor",
  //   name: "Angel's Envy",
  //   tastingNotes: "smooth yet fiery, finishes with a hint of port",
  //   comments: "excellent!",
  //   image: "https://drive.google.com/uc?id=1zirJRp-8-yriFhphAF7OQcOZDKdWFI9G",
  //   rating: 5,
  //   typeOfLiquor: "Bourbon"
  // },
  // {
  //   type: "tea",
  //   name: "Laager",
  //   tastingNotes: "delicate and fruity",
  //   comments: "great African tea!",
  //   image: "https://drive.google.com/uc?id=11fPYwF4LVx1ixVOBrWXlkiHet6X1adeL",
  //   rating: 4,
  //   leafType: "Red",
  //   steepTime: 6
  // },
  {
    type: "tea",
    name: "Mango Infusion",
    tastingNotes: "visually splendid, velvety",
    comments: "Bold, rich flavor, for the mango lovers!",
    image: "v1553797087/drinkImages/w7kzqvz9fqbgrdac042v",
    rating: 4,
    leafType: "Black",
    steepTime: 5
  },
  {
    type: "liquor",
    name: "Gin and Soda",
    tastingNotes: "A refreshing citrus and pine flavor.",
    comments: "A classic! Best way to kick of a summer evening.",
    image: "v1553797147/drinkImages/dkcfkgi29ved4pfrtyxb",
    rating: 5,
    typeOfLiquor: "Gin"
  },
  {
    type: "liquor",
    name: "Moscow Mule",
    tastingNotes: "Subtle citrus and spicy, ginger flavor.",
    comments: "Best enjoed from a copper mug!",
    image: "v1553797196/drinkImages/jluudzf9dqrjhbjo5ohw",
    rating: 5,
    typeOfLiquor: "Vodka"
  },
  {
    type: "coffee",
    name: "Classic Americano",
    tastingNotes: "Intense, deep coffee notes. Nutty, earthy flavors",
    comments: "For the true coffee lovers!",
    image: "v1553797240/drinkImages/qqwvqkxmlxuqdmjq1nhl",
    rating: 3,
    beanType: "Colombian",
    brewType: "Espresso",
    strength: 5
  },
  {
    type: "beer",
    name: "HaandBic",
    tastingNotes: "Moderate sweet flavor, lightly acidic with a smooth tartness and soft carbination",
    comments: "A unique and hard to find sour beer.",
    image: "v1553797280/drinkImages/ld8pfapz6u4uiacltpqe",
    rating: 2,
    style: "Belgian Fruit Lambic",
    source: "Haandbryggeriet Brewery"
  }
];

module.exports = {
  clearDatabase,
  createDrink,
  feedData
};