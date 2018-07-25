let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('Assigning location', function(){

    it('should return Bellvile as the location for registration CY', function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('should return Cape Town as the location for registration CA', function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
});
