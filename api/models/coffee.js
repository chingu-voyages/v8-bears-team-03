const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Drink = require("./drink");
const options = { discriminatorKey: "drinkType" };

const coffeeSchema = new Schema(
  {
    bean_type: {
      type: String
    },
    brew_time: {
      type: Number
    },
    strength: {
      type: Number
    }
  },
  options
);

module.exports = Coffee = Drink.discriminator("Coffee", coffeeSchema);
