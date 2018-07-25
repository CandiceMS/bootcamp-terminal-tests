let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('Total cost', function(){

    it('should return "R8.25" as the total cost for  0 sms and 3 calls', function(){
        assert.equal(totalPhoneBill('call, call, call'), 'R8.25');
    });
    it('should return "R4.05" as the total cost for 2 sms and 1 call', function(){
        assert.equal(totalPhoneBill('sms, call, sms'), 'R4.05');
    });
});
