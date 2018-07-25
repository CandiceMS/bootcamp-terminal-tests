const assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('Registration count', function(){

    it('should return the number 2 as the amount of registrations that start with CJ', function(){
        assert.equal(countAllPaarl('CJ123000, CJ6059'), 2);
    });
    it('should return the number 1 as the amount of registrations that start with CJ', function(){
        assert.equal(countAllPaarl('BY123000, CJ 453'), 1);
    });
});
