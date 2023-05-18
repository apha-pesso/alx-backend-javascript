// Test file for calculateNumber

const calc = require("./1-calcul");
const assert = require("assert");

describe("calc", function () {
  it("Should round the variables and return operate on the parameter with type", function () {
    assert.equal(calc("SUM", 1.4, 4.5), 6);
    assert.equal(calc("SUBTRACT", 1.4, 4.5), -4);
    assert.equal(calc("DIVIDE", 1.4, 4.5), 0.2);
    assert.equal(calc("DIVIDE", 1.4, 0), "Error");
    assert.equal(calc("SUM", 0, 3.7), 4);
  });
});
