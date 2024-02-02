const expect = require('chai').expect;
const rentCar = require('./rentCar');

describe('rentCar', function (){
    describe('searchCar', function (){
        it('validation input', function (){
            let arr = 23;
            let string = 12;

            let result1 = () => rentCar.searchCar(arr, 'mazda');
            let result2 = () => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], string);

            expect(result1).to.throw(Error, 'Invalid input!');
            expect(result2).to.throw(Error, 'Invalid input!');
        })
        it('lenght', function (){
            let arr = ['a', 'b', 'c'];
            let string = 'a';

            let result = rentCar.searchCar(arr, string);

            expect(result).to.equal(`There is 1 car of model ${string} in the catalog!`);
        })
    })
    describe('calculatePriceOfCar', function (){
        it('validation input', function (){
            let model = 23;
            let days = '12';

            let result1 = () => rentCar.calculatePriceOfCar(model, 12);
            let result2 = () => rentCar.calculatePriceOfCar("Volkswagen", days);

            expect(result1).to.throw(Error, 'Invalid input!');
            expect(result2).to.throw(Error, 'Invalid input!');
        })
        it('have a car', function (){
            let model = 'BMW';
            let model2 = 'a';
            let days = 2;

            let result1 = rentCar.calculatePriceOfCar(model, days);
            let result2 = () => rentCar.calculatePriceOfCar(model2, days);

            expect(result1).to.equal(`You choose ${model} and it will cost $90!`);
            expect(result2).to.throw(Error, 'No such model in the catalog!');
        })
    })
    describe('checkBudget', function (){
        it('validation input', function (){
            let costPerDay = '23';
            let days = '12';
            let budget = '12';

            let result1 = () => rentCar.checkBudget(costPerDay, 12 , 12);
            let result2 = () => rentCar.checkBudget(12, days, 12);
            let result3 = () => rentCar.checkBudget(12, 12, budget);

            expect(result1).to.throw(Error, 'Invalid input!');
            expect(result2).to.throw(Error, 'Invalid input!');
            expect(result3).to.throw(Error, 'Invalid input!');
        })
    })
    it('bigger', function (){
        let costPerDay = 10;
        let days = 2;
        let budget = 20;
        let budget3 = 10;

        let result1 = rentCar.checkBudget(costPerDay, days , budget);
        let result2 = rentCar.checkBudget(costPerDay, days, budget3);

        expect(result1).to.equal(`You rent a car!`);
        expect(result2).to.equal('You need a bigger budget!');
;
    })
})