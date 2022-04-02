function solve(input) {
  let n = input.shift();
  let cars = {};
  for (let i = 0; i < n; i++) {
    let [carBrand, mileage, fuel] = input.shift().split("|");
    cars[carBrand] = { 
        mileage: Number(mileage),
        fuel: Number(fuel)
    };
  }
  while (input[0] !='Stop') {
      let [command, brand, p1,p2] = input.shift().split(' : ')
      if (command == 'Drive') {
          if (Number(p2) > cars[brand].fuel) {
              console.log('Not enough fuel to make that ride');
          }
          else {
             cars[brand].mileage  += Number(p1);
              cars[brand].fuel  -= Number(p2)
              console.log(`${brand} driven for ${p1} kilometers. ${p2} liters of fuel consumed.`);
              
          }
          if (cars[brand].mileage >= 100000) {
             delete cars[brand]
             console.log(`Time to sell the ${brand}!`);
         }
         
      }
    
      if (command == 'Refuel') {
          
        let refueld = Math.min(p1, (75 - Number(cars[brand].fuel)));
        cars[brand].fuel = Number(cars[brand].fuel) + refueld;
        console.log(`${brand} refueled with ${refueld} liters`);
      }
      if (command == 'Revert') {
        cars[brand].mileage  -= Number(p1);
          if (cars[brand].mileage < 10000) {
              cars[brand].mileage = 10000
          }
          else{
              console.log(`${brand} mileage decreased by ${p1} kilometers`);
          }
      }
  }
  for (let brand in cars) {
    console.log(`${brand} -> Mileage: ${cars[brand].mileage} kms, Fuel in the tank: ${cars[brand].fuel} lt.`);
}
}
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  
  
  );
