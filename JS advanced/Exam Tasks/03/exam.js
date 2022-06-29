const { expect } = require("chai");
const { carService } = require("./examSolution");

describe("Test", () => {
    describe("isItExpensive  ", () => {
      it("happy path", () => {
        expect(carService.isItExpensive("Engine")).to.equal(`The issue with the car is more severe and it will cost more money`);
        expect(carService.isItExpensive("Transmission")).to.equal(`The issue with the car is more severe and it will cost more money`);
        expect(carService.isItExpensive("someString")).to.equal(`The overall price will be a bit cheaper`);
    });
  
    });
  
    describe("discount  ", () => {
      it("happy path", () => {
        expect(carService.discount(3,100)).to.equal(`Discount applied! You saved 15$`);
        expect(carService.discount(6,100)).to.equal(`Discount applied! You saved 15$`);
        expect(carService.discount(7,100)).to.equal(`Discount applied! You saved 15$`);
        expect(carService.discount(8,100)).to.equal(`Discount applied! You saved 30$`);
        expect(carService.discount(2,100)).to.equal("You cannot apply a discount");
        expect(carService.discount(1,100)).to.equal("You cannot apply a discount");

      });
      it("Invalid input", () => {
        expect(()=> carService.discount('someSting',100)).to.throw();
        expect(()=> carService.discount(3,'someString')).to.throw();
        expect(() => carService.discount('string','someString')).to.throw();
      });

    });
    describe("partsToBuy   ", () => {
      it("happy path", () => { 
         expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], (["blowoff valve"]))).to.equal(145);
         expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], (["blowoff valve", "coil springs"]))).to.equal(375);

      
      });
      it("Ivalid Input", () => { 
        expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0);
        expect(()=>carService.partsToBuy('string', ["blowoff valve", "injectors"])).to.throw();
        expect(() => carService.partsToBuy([], 'string')).to.throw();
        expect(() => carService.partsToBuy(10, 'string')).to.throw();



     
     });
    });
  });