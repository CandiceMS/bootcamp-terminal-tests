let assert = require("assert");
let countAllTown = require("../countAllFromTown");

describe('How many from a town', function(){

    it('should return the number 2 after counting how many registrations start with a CL location registration', function(){
        assert.equal(countAllTown('CL123,CL321,AB020'), 2);
    });
    it('should return the number 1 after counting how many registrations start with a CL location registration', function(){
        assert.equal(countAllTown('AP121,CL7531,AB12'), 1);
    });
});
