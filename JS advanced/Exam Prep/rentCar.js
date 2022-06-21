const {expect} = require('chai');
const{rentCar} = require('./solution');

describe('Test', () => {
    describe('searchCar', () => {
        it('happy path', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"],'BMW')).to.equal('There is 1 car of model BMW in the catalog!');
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"],'BMW')).to.equal('There is 2 car of model BMW in the catalog!');
        });

        it('invalid input', () => {
            expect(() => rentCar.searchCar('Thriller', 10)).to.throw();
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"]), 10).to.throw();
            expect(() => rentCar.searchCar(42, "BMW")).to.throw();
        });

        it('no matching elements', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], "Opel")).to.throw();
        });
    });

    describe('calculatePriceOfCar', () => {
        it('happy path', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 2)).to.equal(`You choose BMW and it will cost $90!`);
            expect(rentCar.calculatePriceOfCar('Volkswagen', 3)).to.equal(`You choose Volkswagen and it will cost $60!`);
        });

        it('happy path, no matches found', () => {
            expect(() => rentCar.calculatePriceOfCar("Opel", 2)).to.throw();
        });

        it('Invalid input', () => {
            expect(() => rentCar.calculatePriceOfCar(2, 1)).to.throw();
            expect(() => rentCar.calculatePriceOfCar('BMW', 'fds')).to.throw();
            expect(() => rentCar.calculatePriceOfCar(2, 'fds')).to.throw();
        });
    });

    describe('checkBudget', () => {
        it('happy path', () => {
            expect(rentCar.checkBudget(20, 2, 50)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(20, 2, 40)).to.equal('You rent a car!');
        });

        it('happy path, not enough budget', () => {
            expect(rentCar.checkBudget(200, 2, 50)).to.equal('You need a bigger budget!');
        });
        it('Invalid input', () => {
            expect(() => rentCar.checkBudget('200', 2, 50)).to.throw();
            expect(() => rentCar.checkBudget(200, '2', 50)).to.throw();
            expect(() => rentCar.checkBudget(200, 2, '50')).to.throw();
        });
    });
});