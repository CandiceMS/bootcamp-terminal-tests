let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('True if Bellville registration', function(){

    it('should return true because the registration starts with CY', function(){
        assert.equal(isFromBellville('CY123000'), true);
    });
    it('should return false because the registration does not start with CY', function(){
        assert.equal(isFromBellville('BY123000'), false);
    });
});
