let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('How many years ago', function(){

    it('should return 90 years difference between input year and current year', function(){
        assert.equal(yearsAgo(1928), 90);
    });
    it('should return 2 years difference between input year and current year', function(){
        assert.equal(yearsAgo(2016), 2);
    });
});
