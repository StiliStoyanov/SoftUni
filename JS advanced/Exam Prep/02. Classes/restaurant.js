class Restaurant {
    constructor(budgetMoney ) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(commands) {
        for (const line of commands) {
            let [productName, productQuantity, productTotalPrice] = line.split(' ')
            if (this.stockProducts.hasOwnProperty(productName)) {
                this.stockProducts[pro]
            }
            if (this.budgetMoney >= productTotalPrice) {
                this.stockProducts[productName] = productQuantity
                this.budgetMoney -= productTotalPrice
            }
        }
    }
}