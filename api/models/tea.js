const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Drink = require("./drink");
const options = { discriminatorKey: "drinkType" };

const teaSchema = new Schema(
  {
    leafType: {
      type: String
    },
    steepTime: {
      type: Number
    }
  },
  options
);

module.exports = Tea = Drink.discriminator("Tea", teaSchema);
