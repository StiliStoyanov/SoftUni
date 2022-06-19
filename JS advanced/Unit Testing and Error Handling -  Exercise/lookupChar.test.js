let expect = require("chai").expect;

function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }

  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }
  return string.charAt(index);
}

describe("lookup char test", () => {
  it("returns undefined when given a wrong input", () => {
    expect(lookupChar(2, 0)).to.equal(undefined);
  });
  it("returns undefined when given a wrong input", () => {
    expect(lookupChar("fsd", "fs")).to.equal(undefined);
  });
  it("returns undefined when given an invalid index", () => {
    expect(lookupChar("hello", 2.4)).to.equal(undefined);
  });
  it("returns error when given an invalid index", () => {
    expect(lookupChar("hello", 1000)).to.equal("Incorrect index");
  });
  it("returns error when given an invalid index", () => {
    expect(lookupChar("hello", -2)).to.equal("Incorrect index");
  });
  it("returns correct result with valid input", () => {
    expect(lookupChar("hello", 1)).to.equal("e");
  });
});
