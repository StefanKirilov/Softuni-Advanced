class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (!model || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || mileage < 0) {
            throw new Error(`Invalid input!`);
        }

        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let searchingModel = this.availableCars.find(el => el.model === model);

        if (searchingModel === undefined) {
            throw new Error(`${model} was not found!`);
        }

        const currentMileage = searchingModel.mileage;
        const currentHorsePower = searchingModel.horsepower;
        const index = this.availableCars.findIndex(el => el.model === model);
        let currentPrice = 0;


        if (currentMileage <= desiredMileage) {
            currentPrice = searchingModel.price;
        } else if (currentMileage - desiredMileage <= 40000) {
            currentPrice = 0.95 * searchingModel.price;
        } else if (currentMileage - desiredMileage > 40000) {
            currentPrice = 0.9 * searchingModel.price;
        }

        this.soldCars.push({ model, horsepower: currentHorsePower, soldPrice: currentPrice });
        this.availableCars.splice(index, 1);
        this.totalIncome += currentPrice;
        return `${model} was sold for ${currentPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return `There are no available cars`;
        }
        let result = ['-Available cars:'];

        for (let line of this.availableCars) {
            let { model, horsepower, price, mileage } = line;
            let text = `---${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
            result.push(text);
        }

        return result.join('\n');
    }


    salesReport(criteria) {
        let sortedArr;
        if (criteria === 'horsepower') {
            sortedArr = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            sortedArr = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error(`Invalid criteria!`);
        }

        let result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`, `-${sortedArr.length} cars sold:`];

        for (let line of sortedArr) {
            let { model, horsepower, soldPrice } = line;
            result.push(`---${model} - ${horsepower} HP - ${soldPrice.toFixed(2)}$`);
        }
        return result.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');

console.log(dealership.addCar('Toyota Corolla', 100, 3500,190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('', 120, 4900, 240000))