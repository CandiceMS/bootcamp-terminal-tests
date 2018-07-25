const assert = require("assert");
var greet = require("../greet");

describe("the greet function", function(){
  it("should greet Nathri correctly", function(){
    assert.equal('Hello, Nathri', greet('Nathri'));
  });
  it("should greet Taslin correctly", function(){
    assert.equal('Hello, Taslin', greet('Taslin'));
  });
});
