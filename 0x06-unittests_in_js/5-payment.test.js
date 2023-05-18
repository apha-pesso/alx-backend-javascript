// New suite for sendPaymentRequestToApi module

const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;

// Import the function to be tested
const Utils = require("./utils");

// Import the function to be tested
const sendPaymentRequestToApi = require("./5-payment");

describe("sendPaymentRequestToApi", function () {
  let consoleSpy;

  beforeEach(function () {
    consoleSpy = sinon.spy(console, "log");
  });

  afterEach(function () {
    consoleSpy.restore();
  });

  it("should call calculateNumber", function () {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly("The total is: 120")).to.be.true;
    sinon.assert.calledOnce(consoleSpy);
  });

  it("should call calculateNumber", function () {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWithExactly("The total is: 20")).to.be.true;
    sinon.assert.calledOnce(consoleSpy);
  });
});
