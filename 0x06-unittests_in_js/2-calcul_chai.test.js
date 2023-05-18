// Test file for calculateNumber

const chai = require("chai");
const expect = chai.expect;
const calc = require("./1-calcul");
// const assert = require("assert");

describe("calc", function () {
  it("Should round the variables and return operate on the parameter with type", function () {
    expect(calc("SUM", 1.4, 4.5)).to.equal(6);
    expect(calc("SUBTRACT", 1.4, 4.5)).to.equal(-4);
    expect(calc("DIVIDE", 1.4, 4.5)).to.equal(0.2);
    expect(calc("DIVIDE", 1.4, 0)).to.equal("Error");
    expect(calc("SUM", 0, 3.7)).to.equal(4);
  });
});
