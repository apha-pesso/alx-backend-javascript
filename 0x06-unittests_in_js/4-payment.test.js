// New suite for sendPaymentRequestToApi module

const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;

// Import the function to be tested
const Utils = require("./utils");

// Import the function to be tested
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi", function () {
  it("should call calculateNumber", function () {
    // const calcSpy = sinon.spy(Utils, "calculateNumber");
    const consoleSpy = sinon.spy(console, "log");

    const calc = sinon.stub(Utils, "calculateNumber").returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(calc.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly("The total is: 10")).to.be.true;

    calc.restore();
    // calcSpy.restore();
    consoleSpy.restore();
  });
});
