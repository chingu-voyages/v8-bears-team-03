// Dependencies for testing
const chai = require("chai");
const chaiHttp = require("chai-http");

const {app} = require("../index");
const {Drink} = require("../models/drink");
const {clearDatabase, createDrink, feedData} = require("../utilities/seed");

// Configure chai
chai.use(chaiHttp);
chai.should();

beforeEach(clearDatabase);
beforeEach(createDrink);

// Should GET all Drinks
describe("Drinks", () => {
    it("should get all drinks", (done) => {
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

    // it("should add a single drink on POST /drinks", (done) => {
    //     chai
    // });
});