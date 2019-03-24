const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Drink = require("./drink");
const options = { discriminatorKey: "drinkType" };

const coffeeSchema = new Schema(
  {
    beanType: {
      type: String
    },
    brewType: {
      type: String
    },
    strength: {
      type: Number
    }
  },
  options
);

module.exports = Coffee = Drink.discriminator("Coffee", coffeeSchema);
