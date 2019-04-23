// To run tests, type 'npm run test' or
// 'npm run test-watch' (nodemon)

// Dependencies for testing
const chai = require("chai");
const chaiHttp = require("chai-http");

const { app } = require("../index");

// Configure chai
chai.use(chaiHttp);
chai.should();

// TESTING DRINK ROUTES
describe("Testing Drinks", () => {

  // Should GET all Drinks
  it("should get all drinks", done => {
    chai
      .request(app)
      .get("/drinks")
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("object");
        done();
      });
  });

  // Should POST a drink
  it("should add a single drink on POST /drinks", done => {
    // Change type to either tea, coffee, liquor or beer to test
    // Anything else than those four will result in 400 bad request
    const defaultDrinkSettings = {
      type: "coffee",
      name: "testName",
      tastingNotes: "testNotes",
      comments: "testComments",
      image: "testImage",
      rating: 5
    };

    chai
      .request(app)
      .post("/drinks")
      .set("content-type", "application/json")
      .send(defaultDrinkSettings)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("object");
        res.body.should.have.property("drinkType");
        res.body.should.have.property("name");
        res.body.should.have.property("tastingNotes");
        res.body.should.have.property("comments");
        res.body.should.have.property("image");
        res.body.should.have.property("rating");
        res.body.should.have.property("_id");
        done();
      });
  });

  // Should GET drink by ID
  it("should list a SINGLE drink on /drinks/:id GET", done => {
    const newDrink = new Drink({
      type: "tea",
      name: "testName",
      tastingNotes: "testNotes",
      comments: "testComments",
      image: "testImage",
      rating: 5
    });

    newDrink.save((err, data) => {
      chai
        .request(app)
        .get("/drinks/" + data.id)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("object");
          res.body.drink.should.have.property("name");
          res.body.drink.should.have.property("tastingNotes");
          res.body.drink.should.have.property("comments");
          res.body.drink.should.have.property("image");
          res.body.drink.should.have.property("rating");
          done();
        });
    });
  });

  // Should PATCH drink by ID
  it("should update a single drink on /drinks/:id", done => {
    const newDrink = new Drink({
      type: "tea",
      name: "testName",
      tastingNotes: "testNotes",
      comments: "testComments",
      image: "testImage",
      rating: 5
    });

    newDrink.save((err, data) => {
      chai 
        .request(app)
        .patch("/drinks/" + data.id)
        .send({"name": "newUpdatedName",
              "comments": "newUpdatedComment",
              "rating": 123})
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("object");
          res.body.should.have.property("drink");
          res.body.drink.should.be.a("object");
          res.body.drink.should.have.property("name");
          res.body.drink.should.have.property("comments");
          res.body.drink.should.have.property("rating");
          res.body.drink.should.have.property("image");
          res.body.drink.should.have.property("_id");
          res.body.drink.name.should.equal("newUpdatedName");
          res.body.drink.comments.should.equal("newUpdatedComment");
          res.body.drink.rating.should.equal(123);
          res.body.drink.image.should.equal("testImage");
          done();
        });
    })
  });

  // Should DELETE drink by ID
  it("should delete a single drink on /drinks/:id", done => {
    const newDrink = new Drink({
      type: "tea",
      name: "testName",
      tastingNotes: "testNotes",
      comments: "testComments",
      image: "testImage",
      rating: 5
    });

    newDrink.save((err, data) => {
      chai 
        .request(app)
        .delete("/drinks/" + data.id) 
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("object");
          res.body.should.have.property("drink");
          res.body.drink.should.be.a("object");
          res.body.drink.should.have.property("name");
          res.body.drink.should.have.property("comments");
          res.body.drink.should.have.property("rating");
          res.body.drink.should.have.property("image");
          res.body.drink.should.have.property("_id");
          res.body.drink.name.should.equal("testName");
          res.body.drink.comments.should.equal("testComments");
          res.body.drink.rating.should.equal(5);
          res.body.drink.image.should.equal("testImage");
          done();
        });
    });
  });
});
