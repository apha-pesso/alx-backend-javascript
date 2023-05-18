// Test file for calculateNumber

const calc = require("./0-calcul");
const assert = require("assert");

describe("calc", function() {
  it("Should round the variables and return the sum", function() {
    assert.equal(calc(2.1, 3.4), 5);
    assert.equal(calc(1, 3), 4);
    assert.equal(calc(1.4, 4.5), 6);
    assert.equal(calc(1, 3.7), 5);
    assert.equal(calc(0, 3.7), 4);
  });
});
