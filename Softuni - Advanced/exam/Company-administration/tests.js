const expect = require('chai').expect;
const companyAdministration = require('./companyAdministration');

describe('companyAdministration', function(){
    describe('hiringEmployee', function (){
        it('valid position', function (){
            let name = 'Stefan';
            let position = 'Proektant';
            let yearExperience = 10;

            let result = () => companyAdministration.hiringEmployee(name, position, yearExperience);

            expect(result).to.throw(Error, `We are not looking for workers for this position.`);
        })
        it('valid year', function (){
            let name = 'Stefan';
            let position = 'Programmer';
            let yearExperience = 10;
            let yearExperience2 = 2;

            let result1 = companyAdministration.hiringEmployee(name, position, yearExperience);
            let result2 = companyAdministration.hiringEmployee(name, position, yearExperience2);

            expect(result1).to.equal(`${name} was successfully hired for the position ${position}.`);
            expect(result2).to.equal(`${name} is not approved for this position.`);
        })
    })
    describe('calculateSalary', function (){
        it('valid year', function (){
            let hours = 'Stefan';
            let hours2 = -2;

            let result = () => companyAdministration.calculateSalary(hours);
            let result2 = () => companyAdministration.calculateSalary(hours2);

            expect(result).to.throw(Error, "Invalid hours");
            expect(result2).to.throw(Error, "Invalid hours");
        })
        it('return result', function (){
            let hours = 160;
            let hours2 = 161;
            let totalAmount = 15 * hours;
            let totalAmount2 = 15 * hours2;

            let result1 = companyAdministration.calculateSalary(hours);
            let result2 = companyAdministration.calculateSalary(hours2);

            expect(result1).to.equal(totalAmount);
            expect(result2).to.equal(totalAmount2 + 1000);
        })
    })
    describe('firedEmployee', function (){
        it('validation', function (){

            let result = () => companyAdministration.firedEmployee('arr', 1);
            let result2 = () => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 'index');
            let result3 = () => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -2);
            let result4 = () => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3);

            expect(result).to.throw(Error, "Invalid input");
            expect(result2).to.throw(Error, "Invalid input");
            expect(result3).to.throw(Error, "Invalid input");
            expect(result4).to.throw(Error, "Invalid input");
        })
        it('return the result', function (){

            let arr = ["Petar", "Ivan", "George"];
            let index = 2;

            let result1 = companyAdministration.firedEmployee(arr, index);

            expect(result1).to.equal('Petar, Ivan');

        })
    })
})