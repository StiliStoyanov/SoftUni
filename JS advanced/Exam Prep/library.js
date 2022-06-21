const { expect } = require("chai");
const { library } = require("./librarySolution");

describe("Test", () => {
  describe("calcPriceOfBook ", () => {
    it("happy path", () => {
      expect(library.calcPriceOfBook("Lily", 1999)).to.equal( `Price of Lily is 20.00`);
      expect(library.calcPriceOfBook("Lily", 1980)).to.equal( `Price of Lily is 10.00`);
      expect(library.calcPriceOfBook("Lily", 1975)).to.equal(`Price of Lily is 10.00` );
    });

    it("invalid input", () => {
      expect(() => library.calcPriceOfBook(243, 1902)).to.throw();
      expect(() => library.calcPriceOfBook(243, 20.5)).to.throw();
      expect(() => library.calcPriceOfBook("Moon", "someSting")).to.throw();
      expect(() => library.calcPriceOfBook(14, "fdsfs")).to.throw();
    });
  });

  describe("findBook ", () => {
    it("happy path", () => {
      expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.equal("We found the book you want.");
      expect(library.findBook(["Troy", "Life Style", "Torronto"], "Moon")).to.equal("The book you are looking for is not here!");
      expect(() => library.findBook([], "Moon")).to.throw();
    });
  });
  describe("arrangeTheBooks  ", () => {
    it("happy path", () => { 
    expect(library.arrangeTheBooks(3)).to.equal("Great job, the books are arranged.");
      expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
      expect(library.arrangeTheBooks(50)).to.equal("Insufficient space, more shelves need to be purchased.");
      expect(() => library.arrangeTheBooks(-3)).to.throw();
      expect(() => library.arrangeTheBooks(1.5)).to.throw();
    });
  });
});
