const {app} = require("./../index");
const {clearDatabase, createDrink, feedData} = require("./../utilities/seed");

beforeEach(clearDatabase);
beforeEach(createDrink);