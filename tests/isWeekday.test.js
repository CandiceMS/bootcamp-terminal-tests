let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('True if input is a weekday', function(){

    it('should return true because Monday does not start with an S', function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('should return false because Saturday does start with an S', function(){
        assert.equal(isWeekday('Saturday'), false);
    });
});
