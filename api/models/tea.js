const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Drink = require("./drink");
const options = { discriminatorKey: "type" };

const teaSchema = new Schema(
  {
    leaf_type: {
      type: String
    },
    steep_time: {
      type: Number
    }
  },
  options
);

module.exports = Tea = Drink.discriminator("Tea", teaSchema);
