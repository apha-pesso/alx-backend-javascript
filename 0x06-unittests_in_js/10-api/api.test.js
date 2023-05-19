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

describe("GET /available_payments", function () {
  it("call GET /available_payments, test the statuscode and return value", function (done) {
    request(
      "http://localhost:7865/available_payments",
      (error, response, body) => {
        expect(response.statusCode).to.deep.equal(200);
        expect(body).to.equal(
          '{"payment_methods":{"credit_cards":true,"paypal":false}}'
        );
        done();
      }
    );
  });
});

describe("POST /login", function () {
  it("call POST /login and test the statuscode and return value", function (done) {
    request.post(
      {
        url: "http://localhost:7865/login",
        json: true,
        body: {
          userName: "Betty",
        },
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal("Welcome Betty");
        done();
      }
    );
  });
});
