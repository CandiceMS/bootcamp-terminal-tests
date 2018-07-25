const assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('How many registrations', function(){

    it('should return the number 3 after counting the number of registrations in a string using a comma to split and identify each one', function(){
        assert.equal(countRegNumber('CY123000, CA0909, ND1234'), 3);
    });
    it('should return the number 2 after counting the number of registrations in a string using a comma to split and identify each one', function(){
        assert.equal(countRegNumber('BY123000, GP3459'), 2);
    });
});
