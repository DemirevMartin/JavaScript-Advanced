class Restaurant {
    constructor (budgetMoney, menu, stockProducts, history) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts (products) {
        //"{productName} {productQuantity} {productTotalPrice}"
        for(const el of products) {
            let [productName, productQuantity, productTotalPrice] = el.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if(productTotalPrice <= this.budgetMoney) {
                if(this.stockProducts.hasOwnProperty(productName)) {
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

    addToMenu (meal, products, price) {
        if(!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                products,
                price
            };
            
            const count = Object.keys(this.menu).length;
            if(count === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${count} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu () {
        const count = Object.keys(this.menu).length;
        let report = '';
        if(count > 0) {
            for(const [key, value] of Object.entries(this.menu)) {
                report += `${key} - $ ${value.price}\n`;
            }
        } else report += `Our menu is not ready yet, please come later...`;

        return report.trim();
    }

    makeTheOrder (meal) {
        if(!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let notEnough = false;
        if(Object.entries(this.stockProducts).length === 0) { 
            notEnough = true;
        }
        else {
            const products = this.menu[meal].products;
            for(const el of products) {
                let [name, quantity] = el.split(' ');
                quantity = Number(quantity);
                for(let [n, q] of Object.entries(this.stockProducts)) {
                    if(n === name) {
                        if(q >= quantity) {
                            this.stockProducts[n] -= quantity;
                        } else {
                            notEnough = true;
                            break;
                        }
                    }
                }
            }
        }
        
        if(notEnough) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }
        const price = this.menu[meal].price;
        this.budgetMoney += price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`;
    }
}

//Input 1 -y
//Input 2 -y
//Input 3 -y
//Input 4 -у

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Banana 5 1', 'Banana 5 1']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));