let chai = require("chai");
let expect = chai.expect;


const carService = {
    isItExpensive(issue) {
    if (issue === "Engine" || issue === "Transmission") {
    return `The issue with the car is more severe and it will cost more money`;
    } else {
    return `The overall price will be a bit cheaper`;
    }
    },
    discount(numberOfParts, totalPrice) {
    if (
    typeof numberOfParts !== "number" ||
    typeof totalPrice !== "number"
    ) {
    throw new Error("Invalid input");
    }
    let discountPercentage = 0;
    if (numberOfParts > 2 && numberOfParts <= 7) {
    discountPercentage = 15;
    } else if (numberOfParts > 7) {
    discountPercentage = 30;
    }
    let result = (discountPercentage / 100) * totalPrice;
    if (numberOfParts <= 2) {
    return "You cannot apply a discount";
    } else {
    return `Discount applied! You saved ${result}$`;
    }
    },
    partsToBuy(partsCatalog, neededParts) {
    let totalSum = 0;
    if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
    throw new Error("Invalid input");
    }
    neededParts.forEach((neededPart) => {
    partsCatalog.map((obj) => {
        if (obj.part === neededPart) {
            totalSum += obj.price;
            }
            });
            });
            return totalSum;
            },
            };

            describe('test function', () => {
                describe('isItExpensive function', () => {
                    it('correct input', () => {
                        expect(carService.isItExpensive('Engine')).to.equal( `The issue with the car is more severe and it will cost more money`)

                        expect(carService.isItExpensive('Transmission')).to.equal( `The issue with the car is more severe and it will cost more money`)
                    })
                    it('not correct input', () => {
                        expect(carService.isItExpensive('test')).to.equal( `The overall price will be a bit cheaper`)
                    })
                })

                describe('discount function', () => {
                    it('correct input', () => {
                        expect(carService.discount(2,1000)).to.equal("You cannot apply a discount")
                        expect(carService.discount(3,1000)).to.equal(`Discount applied! You saved 150$`)
                        expect(carService.discount(7,1000)).to.equal(`Discount applied! You saved 150$`)
                        expect(carService.discount(8,1000)).to.equal(`Discount applied! You saved 300$`)
                    })
                    it('not correct input', () => {
            expect(() => carService.discount([1], 1)).to.throw('Invalid input');
            expect(() => carService.discount({ '1': 1 }, 1)).to.throw('Invalid input');
            expect(() => carService.discount(undefined, 1)).to.throw('Invalid input');
            expect(() => carService.discount(null, 1)).to.throw('Invalid input');

            expect(() => carService.discount(1, 'test')).to.throw('Invalid input');
            expect(() => carService.discount(1, [1])).to.throw('Invalid input');
            expect(() => carService.discount(1, { '1': 1 })).to.throw('Invalid input');
            expect(() => carService.discount(1, undefined)).to.throw('Invalid input');
            expect(() => carService.discount(1, null)).to.throw('Invalid input');
                    })
                })

                describe('partsToBuy function', () => {
                    it('correct input', () => {
                        expect(carService.partsToBuy([],["blowoff valve", "injectors"])).to.equal(0);
                        expect(carService.partsToBuy( [{ part: "blowoff valve", price: 145 }, { part: "injectors", price: 230 }],
                        ["blowoff valve", "injectors"])).to.equal(375);
                        expect(carService.partsToBuy(
                            [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],
                            ["blowoff valve", "injectors"])).to.equal(145);
                    })
                    it('not correct input', () => {
                        expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], 'test')).to.throw('Invalid input');
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], 1)).to.throw('Invalid input');
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], { '1': 1 })).to.throw('Invalid input');
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], undefined)).to.throw('Invalid input');
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], null)).to.throw('Invalid input');

            expect(() => carService.partsToBuy('test', ["blowoff valve", "injectors"])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(1, ["blowoff valve", "injectors"])).to.throw('Invalid input');
            expect(() => carService.partsToBuy({ '1': 1 }, ["blowoff valve", "injectors"])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(undefined, ["blowoff valve", "injectors"])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(null, ["blowoff valve", "injectors"])).to.throw('Invalid input');
                    })
                })
            })