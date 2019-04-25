describe("getRangeMinLimit", function() {

  it("computes the minimum value of the range: for 4-digit numbers, the minimum value is 1000", function() {
    assert.equal(getRangeMinLimit(4), 1000);
  });

  it("for 5-digit numbers, the minimum value is 10000", function() {
    assert.equal(getRangeMinLimit(5), 10000);
  });  

});

/*
describe("getRangeMaxLimit", function() {

  it("computes the maximum value of the range: for 4-digit numbers, the maximum value is 9999", function() {
    assert.equal(getRangeMaxLimit(4), 9999);
  });

  it("for 4-digit numbers, the maximum value is 99999", function() {
    assert.equal(getRangeMaxLimit(5), 99999);
  });

});

describe("getFibonacciArrayByRange", function() {

  it("computes Fibonacci numbers by range: for range 5-22, gets an array [5,8,13,21]", function() {
    CollectionAssert.AreEqual(getFibonacciArrayByRange(5, 22), [5,8,13,21]);
  });

  it("for range 23-100, gets an array [34,55,89]", function() {
    assert.equal(getFibonacciArrayByRange (23, 100), [34,55,89]);
  });

});
*/