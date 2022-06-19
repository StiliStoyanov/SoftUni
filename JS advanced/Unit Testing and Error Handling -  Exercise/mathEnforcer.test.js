let expect = require("chai").expect;

let mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    }
    return num1 + num2;
  },
};
describe("Math Enforcer", () => {
  describe("addFive", () => {
    it("should return undefined with invalid input", () => {
      expect(mathEnforcer.addFive("fds")).to.equal(undefined);
    });
    it("should return correct date with valid input", () => {
      expect(mathEnforcer.addFive(5)).to.equal(10);
    });
    it("should return correct date with valid input", () => {
      expect(mathEnforcer.addFive(-5)).to.equal(0);
    });
    it("should return correct date with valid input", () => {
      expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0, 1);
    });
  });
  describe("subtractTen", () => {
    it("should return undefined with invalid input", () => {
      expect(mathEnforcer.subtractTen("fds")).to.equal(undefined);
    });
    it("should return correct date with valid input", () => {
      expect(mathEnforcer.subtractTen(15)).to.equal(5);
    });
    it("should return correct date with valid input", () => {
      expect(mathEnforcer.subtractTen(-15)).to.equal(-25);
    });
    it("should return correct date with valid input", () => {
      expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5, 0, 1);
    });
  });
  describe("sum", () => {
    it("should return undefined with invalid input", () => {
      expect(mathEnforcer.sum("fds", 3)).to.equal(undefined);
    });
    it("should return undefined with invalid input", () => {
      expect(mathEnforcer.sum(3, "fds")).to.equal(undefined);
    });
    it("should return correct date with valid input", () => {
      expect(mathEnforcer.sum(15, 5)).to.equal(20);
    });
    it("should return correct date with valid input", () => {
      expect(mathEnforcer.sum(15.5, 2.5)).to.be.closeTo(18, 0, 1);
    });
  });
});
