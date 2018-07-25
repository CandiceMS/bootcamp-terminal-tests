let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('Quantity greater than the threshold', function(){

    it('should return only 2 items that have a quantity greater than the threshold of 20', function(){
        assert.deepEqual( findItemsOver([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}], 20),
    [{name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}]);
    });
    it('should return all items as each has a quantity greater than the threshold of 9', function(){
        assert.deepEqual( findItemsOver([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 27},
    {name : 'bananas', qty : 37},
    {name : 'apples', qty : 3}], 9),
    [{name : 'apples', qty : 10},
    {name : 'pears', qty : 27},
    {name : 'bananas', qty : 37}]);
    });
    it('will return an empty list because no items have a quantity greater than the threshold of 20', function(){
        assert.deepEqual( findItemsOver([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 7},
    {name : 'bananas', qty : 3},
    {name : 'apples', qty : 13}], 20),
    []);
    });
    it('will return an empty list if the sales data list is empty', function(){
        assert.deepEqual( findItemsOver([], 5),[]);
    });
});
