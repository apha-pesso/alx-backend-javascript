// New suite for sendPaymentRequestToApi module

const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;

// Import the function to be tested
const Utils = require("./utils");

// Import the function to be tested
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", function () {
  it("should call calculateNumber", function () {
    const spy = sinon.spy(Utils, "calculateNumber");
    const consoleSpy = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly("The total is: 120")).to.be.true;

    spy.restore();
    consoleSpy.restore();
  });
});
