let cinema = require("./cinema");
const expect = require('chai').expect;

describe('cinema', function (){
    describe('showMovies', function (){
        it('return result',function(){
            let arr1 = [];
            let arr2 = ['King Kong', 'The Tomorrow War', 'Joker'];

            let result1 = cinema.showMovies(arr1);
            let result2 = cinema.showMovies(arr2);

            expect(result1).to.equal('There are currently no movies to show.');
            expect(result2).to.equal('King Kong, The Tomorrow War, Joker');
        })
    })
    describe('ticketPrice', function (){
        it('return result',function(){
            let str1 = "Premiere";
            let str2 = 'blqblq';

            let result1 = cinema.ticketPrice(str1);
            let result2 = () => cinema.ticketPrice(str2);

            expect(result1).to.equal(12.00);
            expect(result2).to.throw(Error, 'Invalid projection type.');
        })
    })
    describe('swapSeatsInHall', function (){
        it('validation',function(){

            let result1 = cinema.swapSeatsInHall(2.2, 2);
            let result2 = cinema.swapSeatsInHall(0 , 2);
            let result3 = cinema.swapSeatsInHall(21, 2);
            let result4 = cinema.swapSeatsInHall(3, 3.3);
            let result5 = cinema.swapSeatsInHall(3, 0);
            let result6 = cinema.swapSeatsInHall(3, 21);
            let result7 = cinema.swapSeatsInHall(3, 3);
            let result8 = cinema.swapSeatsInHall(3, 4);

            expect(result1).to.equal("Unsuccessful change of seats in the hall.");
            expect(result2).to.equal("Unsuccessful change of seats in the hall.");
            expect(result3).to.equal("Unsuccessful change of seats in the hall.");
            expect(result4).to.equal("Unsuccessful change of seats in the hall.");
            expect(result5).to.equal("Unsuccessful change of seats in the hall.");
            expect(result6).to.equal("Unsuccessful change of seats in the hall.");
            expect(result7).to.equal("Unsuccessful change of seats in the hall.");
            expect(result8).to.equal("Successful change of seats in the hall.");
        })
    })
})