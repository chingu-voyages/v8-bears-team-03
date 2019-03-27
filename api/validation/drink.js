const Joi = require("joi");

const drinkSchema = Joi.object().keys({
  type: Joi.string()
    .valid(["beer", "coffee", "liquor", "tea"])
    .required(),
  name: Joi.string()
    .min(2)
    .max(30)
    .required(),
  tastingNotes: Joi.string().required(),
  comments: Joi.string().allow(""),
  image: Joi.string().required(),
  rating: Joi.number()
    .integer()
    .min(1)
    .max(5)
    .required(),
  style: Joi.when("type", { is: "beer", then: Joi.string().allow("") }),
  source: Joi.when("type", { is: "beer", then: Joi.string().allow("") }),
  beanType: Joi.when("type", { is: "coffee", then: Joi.string().allow("") }),
  brewTime: Joi.when("type", { is: "coffee", then: Joi.number().allow("") }),
  strength: Joi.when("type", { is: "coffee", then: Joi.number().allow("") }),
  typeOfLiquor: Joi.when("type", {
    is: "liquor",
    then: Joi.string().allow("")
  }),
  leafType: Joi.when("type", { is: "tea", then: Joi.string().allow("") }),
  steepTime: Joi.when("type", { is: "tea", then: Joi.number().allow("") })
});

module.exports = function validateDrinkInput(data) {
  return ({ error, value } = Joi.validate(data, drinkSchema, {
    abortEarly: false
  }));
};
