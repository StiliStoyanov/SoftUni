class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }
  loadingVegetables(vegetables) {
    for (const vegetable of vegetables) {
      let [type, quantity, price] = vegetable.split(" ");

      let foundProductsIndex = this.availableProducts.findIndex(
        (p) => p.type == type
      );

      if (foundProductsIndex == -1) {
        const product = {
          type,
          quantity: Number(quantity),
          price: Number(price),
        };
        this.availableProducts.push(product);
      } else {
        this.availableProducts[foundProductsIndex].quantity += Number(quantity);
        if (Number(price) > this.availableProducts[foundProductsIndex].price) {
          this.availableProducts[foundProductsIndex].price = Number(price);
        }
      }
    }
    let resultArray = [];
    let finalArray = [];
    for (const veg of vegetables) {
      let [type, quantity, price] = veg.split(" ");
      resultArray.push(type);
    }
    resultArray.forEach((c) => {
      if (!finalArray.includes(c)) {
        finalArray.push(c);
      }
    });
    return `Successfully added ` + finalArray.join(", ");
  }
  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    for (let element of selectedProducts) {
      let [type, quantity] = element.split(" ");
      let foundProductsIndex = this.availableProducts.findIndex(
        (p) => p.type == type
      );

      if (foundProductsIndex == -1) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      } else {
        if (
          this.availableProducts[foundProductsIndex].quantity < Number(quantity)
        ) {
          throw new Error(
            `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
              2
            )}.`
          );
        } else {
          totalPrice +=
            this.availableProducts[foundProductsIndex].price * Number(quantity);
          this.availableProducts[foundProductsIndex].quantity -=
            Number(quantity);
        }
      }
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }
  rottingVegetable(type, quantity) {
    let foundProductsIndex = this.availableProducts.findIndex(
      (p) => p.type == type
    );
    if (foundProductsIndex == -1) {
      throw new Error(`${type} is not available in the store.`);
    } else {
      if (
        Number(quantity) > this.availableProducts[foundProductsIndex].quantity
      ) {
        this.availableProducts[foundProductsIndex].quantity = 0;
        return `The entire quantity of the ${type} has been removed.`;
      } else {
        this.availableProducts[foundProductsIndex].quantity -= Number(quantity);
        return `Some quantity of the ${type} has been removed.`;
      }
    }
  }
  revision() {
    let revisionArray = ["Available vegetables:"];
    this.availableProducts = this.availableProducts.sort(
      (a, b) => a.price - b.price
    );
    for (const p of this.availableProducts) {
      revisionArray.push(`${p.type}-${p.quantity}-$${p.price}`);
    }
    revisionArray.push(
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    );
    return revisionArray.join("\n");
  }
}
