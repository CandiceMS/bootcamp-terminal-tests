let assert = require("assert");
let regCheck = require("../regCheck");

describe('True if registration contains "GP, L, EC or MP"', function(){

    it('should return true if registration ends with the GP', function(){
        assert.equal(regCheck('121GP', 'GP'), true);
    });
    it('should return false if registration does not end with GP', function(){
        assert.equal(regCheck('AP121', 'GP'), false);
    });
    it('should return false if registration does not end with CA', function(){
        assert.equal(regCheck('AP121', 'CA'), false);
    });
    it('should return true if registration ends with NM', function(){
        assert.equal(regCheck('121NM', 'NM'), true);
    });
});
