// Test async

const getPay = require("./6-payment_token");
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

describe("getPaymentTokenFromAPI", function () {
  it("should return success", function (done) {
    getPay(true)
      .then((res) => {
        expect(res).to.eql({ data: "Successful response from the API" });
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });
});
