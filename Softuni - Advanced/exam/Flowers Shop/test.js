const expect = require('chai').expect;
const flowerShop = require('./flowerShop');

describe('flower shop', function (){
    describe('calcPriceOfFlowers', function (){
        it('validation type', function (){
            let flower = "Rose";
            let price = 5;
            let quantity = 5;

            let result1 = flowerShop.calcPriceOfFlowers(flower, price, quantity);

            expect(result1).to.equal(`You need $25.00 to buy ${flower}!`);

        })
        it('calculate price', function (){
            let flower = 23;
            let price = 'good';
            let quantity = 'very good';

            let result1 = () => flowerShop.calcPriceOfFlowers(flower, 10, 10);
            let result2 = () => flowerShop.calcPriceOfFlowers('flower', price, 10);
            let result3 = () => flowerShop.calcPriceOfFlowers('flower', 10, quantity);

            expect(result1).to.throw(Error,"Invalid input!");
            expect(result2).to.throw(Error,"Invalid input!");
            expect(result3).to.throw(Error,"Invalid input!");
        })
    })
    describe('checkFlowersAvailable', function (){
        it('check for a string', function (){
            let string = "Rose";
            let string2 = "Flower";
            let arr = ["Rose", "Lily", "Orchid"];

            let result1 = flowerShop.checkFlowersAvailable(string, arr);
            let result2 = flowerShop.checkFlowersAvailable(string2, arr);

            expect(result1).to.equal(`The ${string} are available!`);
            expect(result2).to.equal(`The ${string2} are sold! You need to purchase more!`);
        })
    })
    describe('sellFlowers', function (){
        it('validation type', function (){
            let string = "Rose";
            let string2 = 5;
            let arr = ["Rose", "Lily", "Orchid"];
            let arr2 = 30;

            let result1 = () => flowerShop.sellFlowers(string, arr);
            let result2 = () => flowerShop.sellFlowers(string2, arr2);

            expect(result1).to.throw(Error,"Invalid input!");
            expect(result2).to.throw(Error,"Invalid input!");
        })
        it('return a result', function (){
            let string = 2;
            let arr = ["Rose", "Lily", "Orchid"];

            let result1 = flowerShop.sellFlowers(arr, string);

            expect(result1).to.equal('Rose / Lily');

        })
    })
})