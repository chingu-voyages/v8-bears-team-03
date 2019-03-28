const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const options = { discriminatorKey: "drinkType" };

const drinkSchema = new Schema(
  {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    tastingNotes: {
      type: String
    },
    comments: {
      type: String
    },
    image: {
      type: String,
      // required: true
    },
    rating: {
      type: Number,
      required: true
    }
  },
  options
);

module.exports = Drink = mongoose.model("Drink", drinkSchema);
