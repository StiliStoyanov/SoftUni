const { expect } = require("chai");
const { flowerShop } = require("./flowersShopSolution");

describe("Test", () => {
  describe("calcPriceOfFlowers", () => {
    it("happy path", () => {
      expect(flowerShop.calcPriceOfFlowers("Lily", 20, 2)).to.equal(
        `You need $40.00 to buy Lily!`
      );
    });

    it("invalid input", () => {
      expect(() =>
        flowerShop.calcPriceOfFlowers("Lily", 20.5, 1.55)
      ).to.throw();
      expect(() => flowerShop.calcPriceOfFlowers(20, 10, 20)).to.throw();
      expect(() =>
        flowerShop.calcPriceOfFlowers("Lily", [1, 2, 3], 20)
      ).to.throw();
      expect(() =>
        flowerShop.calcPriceOfFlowers("Mag", 10, "someString")
      ).to.throw();
    });
  });

  describe("checkFlowersAvailable", () => {
    it("happy path", () => {
      expect(
        flowerShop.checkFlowersAvailable("Lily", ["Rose", "Lily", "Orchid"])
      ).to.equal(`The Lily are available!`);
      expect(
        flowerShop.checkFlowersAvailable("Rose", ["Lily", "Orchid"])
      ).to.equal(`The Rose are sold! You need to purchase more!`);
    });
  });

  describe("sellFlowers", () => {
    it("happy path", () => {
      expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal(
        "Rose / Orchid"
      );
    });

    it("happy path, not enough budget", () => {
      expect(() =>
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)
      ).to.throw();
    });
    it("Invalid input", () => {
      expect(() => flowerShop.sellFlowers("Rose", 3)).to.throw();
      expect(() =>
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], "someString")
      ).to.throw();
    });
  });
});
