let chai = require("chai");
let expect = chai.expect;

let mathEnforcer = {
    addFive: function (num) {
    if (typeof(num) !== 'number') {
    return undefined;
}
return num + 5;
},
subtractTen: function (num) {
if (typeof(num) !== 'number') {
return undefined;
}
return num - 10;
},
sum: function (num1, num2) {
if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
return undefined;
}
return num1 + num2;
}
};

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return undefined for non-number input', () => {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        });
        it('should return correct result for possitive integer param', () => {
            expect(mathEnforcer.addFive(10)).to.equal(15);
        });
        it('should return correct result for negative integer param', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('should return correct result for floating point param', () => {
            expect(mathEnforcer.addFive(3.14)).to.closeTo(8.15, 0.01);
        });
    });

    describe('subtractTen', function () {
        it('should return undefined for non-number input', () => {
            expect(mathEnforcer.subtractTen('test')).to.equal(undefined);
        });
        it('should return correct result for possitive integer param', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        });
        it('should return correct result for negative integer param', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
        it('should return correct result for floating point param', () => {
            expect(mathEnforcer.subtractTen(3.14)).to.closeTo(-6.86, 0.01);
        });
    });

    describe('sum', function () {
        it('should return undefined for non-number first input', () => {
            expect(mathEnforcer.sum('test', 10)).to.equal(undefined);
        });
        it('should return undefined for non-number second input', () => {
            expect(mathEnforcer.sum(10, 'test')).to.equal(undefined);
        });
        it('should return correct result for possitive integer params', () => {
            expect(mathEnforcer.sum(10, 10)).to.equal(20);
        });
        it('should return correct result for negative integer param', () => {
            expect(mathEnforcer.sum(-10, - 10)).to.equal(-20);
        });
        it('should return correct result for floating point param', () => {
            expect(mathEnforcer.sum(3.14, 3.14)).to.closeTo(6.28, 0.01);
        });
    });
});

