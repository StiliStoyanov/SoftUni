class CarDealership{
    constructor(name) {
        this.name = name
        this.availableCars = []
        this.soldCars = []
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model == '' || horsepower < 0 
        || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        const car = {
            model,
            horsepower,
            price,
            mileage
        };

        this.availableCars.push(car)
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }
    sellCar(model, desiredMileage){
        let soldPrice = 0;
        let foundCarIndex = this.availableCars.findIndex(c => c.model == model);
        if(foundCarIndex == -1){
            throw Error(`${model} was not found!`);
        } 
        //compare mileage
        if(this.availableCars[foundCarIndex].mileage > desiredMileage){
            if(this.availableCars[foundCarIndex].mileage - desiredMileage <= 40000){
                soldPrice = this.availableCars[foundCarIndex].price - (this.availableCars[foundCarIndex].price * 0.05);
            } else if(this.availableCars[foundCarIndex].mileage - desiredMileage > 40000){
                soldPrice = this.availableCars[foundCarIndex].price - (this.availableCars[foundCarIndex].price * 0.10);
            }
        } else {
            soldPrice = this.availableCars[foundCarIndex].price;
        }
        
        //add car to sold and add sold price to totalIncome
        this.soldCars.push(
            {
                model:this.availableCars[foundCarIndex].model,
                horsepower:this.availableCars[foundCarIndex].horsepower,
                soldPrice: soldPrice
            }
        );
        this.totalIncome+= soldPrice;
 
        //remove car from available
        this.availableCars.slice(foundCarIndex, 1);
 
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    };
    currentCar(){
        let resultArray = [`-Available cars:`]
        if(this.availableCars.length == 0){
            return 'There are no available cars';
        }
        else{
            for (const car of this.availableCars) {
                resultArray.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
            }
        }
        return resultArray.join('\n');
        
    }
    salesReport(criteria){
        let salesReportArray = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
    `-${this.soldCars.length} cars sold:`]
        if (criteria == 'horsepower') {
            this.soldCars.sort((a,b) => b.horsepower - a.horsepower)
        }
        else if(criteria == 'model'){
            this.soldCars.sort((a,b) => a.model.localeCompare(b.model))
        }
        else{
            throw new Error('Invalid criteria!')
        }
        for (const car of this.soldCars) {
            salesReportArray.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
        }
        return salesReportArray.join('\n')
    }
}