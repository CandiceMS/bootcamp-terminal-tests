let assert = require("assert");
let transportFee = require("../transportFee");

describe('Shift/transport allowance', function(){

    it('should return "R20" if the shift is a "morning" shift', function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should return "free" if the shift is "none"', function(){
        assert.equal(transportFee('none'), 'free');
    });
});
