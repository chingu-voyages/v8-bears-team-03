// Dependencies for testing
const chai = require("chai");
const chaiHttp = require("chai-http");

const {app} = require("../index");

// Configure chai
chai.use(chaiHttp);
chai.should();

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

it("should add a single drink on POST /drinks", (done) => {
    const defaultDrinkSettings = {
        type: "beer",
        name: "testName",
        tastingNotes: "testNotes",
        comments: "testComments",
        image: "testImage",
        rating: 5
    } 

    chai
        .request(app)
        .post("/drinks")
        .set('content-type', 'application/json')
        .send(defaultDrinkSettings)
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('type');
            res.body.should.have.property('name');
            res.body.should.have.property('tastingNotes');
            res.body.should.have.property('comments');
            res.body.should.have.property('image');
            res.body.should.have.property('rating');
            res.body.should.have.property("_id");
            done();
        });
});

});