// Test API file

const request = require("request");
const chai = require("chai");
const expect = chai.expect;

describe("GET /", function () {
  it("Makes call to GET /", function (done) {
    request("http://localhost:7865", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });
});

describe("GET /cart/:id", function () {
  it("call GET /cart/:id and test the statuscode", function (done) {
    request("http://localhost:7865/cart/12", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal("Payment methods for cart 12");
      done();
    });
  });

  it("call GET /cart/:id and test the statuscode", function (done) {
    request("http://localhost:7865/cart/hello", (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
