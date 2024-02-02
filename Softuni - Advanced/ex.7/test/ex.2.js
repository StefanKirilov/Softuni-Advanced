let chai = require("chai");
let expect = chai.expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
    return undefined;
    }
    if (string.length % 2 === 0) {
    return "even";
    }
    return "odd";
   }

   describe('function isOddOrEven', function(){
    it("check type of string", function(){

     expect(isOddOrEven(1)).to.equal(undefined);

    });

    it("check for even", function(){

        expect(isOddOrEven('abcd')).to.equal('even');

    });

    it("check for odd", function(){

        expect(isOddOrEven('abc')).to.equal('odd');

    });
   })