let chai = require("chai");
let expect = chai.expect;


function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
    return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
        }
        return string.charAt(index);
       };


    describe('lookupChar', function(){
        it('check type of input', function(){
            expect(lookupChar(1, 1)).to.equal(undefined);
            expect(lookupChar('hello', 4.5)).to.equal(undefined);
        })
        it('check string lenght', function(){
            expect(lookupChar('hello', 5)).to.equal("Incorrect index");
            expect(lookupChar('hello', -1)).to.equal("Incorrect index");
        })
        it('check function work', function(){
            expect(lookupChar('goodbye', 4)).to.equal('b');
            expect(lookupChar('hello', 4)).to.equal('o');
        })
    })