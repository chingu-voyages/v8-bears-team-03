const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Drink = require("./drink");
const options = { discriminatorKey: "drinkType" };

const beerSchema = new Schema(
  {
    style: {
      type: String
    },
    source: {
      type: String
    }
  },
  options
);

module.exports = Beer = Drink.discriminator("Beer", beerSchema);
