class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (let line of products) {
            let [productName, productQuantity, productTotalPrice] = line.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] += productQuantity;
                } else {
                    this.stockProducts[productName] = productQuantity;
                }
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        }
        let productsObj = {};
        for (let line of neededProducts) {
            let [productName, productQuantity] = line.split(' ');
            productQuantity = Number(productQuantity);
            if (productsObj.hasOwnProperty(productName)) {
                productsObj[productName] += productQuantity;
            } else {
                productsObj[productName] = productQuantity;
            }
        }
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {};
            this.menu[meal].products = productsObj;
            this.menu[meal].price = price;
        }

        let currentMenus = Object.keys(this.menu);
        if (currentMenus.length === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else if (currentMenus.length > 1 || currentMenus.length === 0) {
            return `Great idea! Now with the ${meal} we have ${currentMenus.length} meals in the menu, other ideas?`;
        }
    }

    showTheMenu() {
        let menusArr = Object.keys(this.menu);
        if (!menusArr.length) {
            return `Our menu is not ready yet, please come later...`;
        }
        let result = [];
        for (let menu of menusArr) {
            result.push(`${menu} - $ ${this.menu[menu].price}`);
        }
        return result.join('\n');
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let haveProd = true;
            const currentMeal = this.menu[meal];
            const currentMealProducts = currentMeal.products;
            const currentMealPrise = currentMeal.price;


            for (let prod in currentMealProducts) {
                const neededQuantity = this.menu[meal].products[prod];
                const ownQuantity = this.stockProducts[prod];
                if (!this.stockProducts.hasOwnProperty(prod)) {
                    haveProd = false;
                    break;
                } else {
                    if (neededQuantity > ownQuantity) {
                        haveProd = false;
                        break;
                    }
                }
            }
            if (haveProd) {
                for (let prod in currentMeal.products) {
                    this.stockProducts[prod] -= this.menu[meal].products[prod];
                }
                this.budgetMoney += currentMealPrise;

                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${currentMealPrise}.`;
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
    }
}

let kitchen = new Restaurant(1000);
 console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));