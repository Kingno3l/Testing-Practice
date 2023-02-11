const testScript = require("./index");
const lengthofString = testScript.stringLength;
const reverseofString = testScript.reverseString;
const calculator = testScript.numCalculator;
const capitalizeFirstChar = testScript.capitalize;

//string length test
describe("string Length", () => {
  it("should return the number of characters in a string", () => {
    expect(lengthofString("hello")).toBe(5);
    expect(lengthofString("abcdefghij")).toBe(10);
  });
});

//reverse string test
describe("Reverse String", () => {
  it("should reverse the string", () => {
    expect(reverseofString("hello")).toBe("olleh");
    expect(reverseofString("kingno3l")).toBe("l3ongnik");
  });
});

//calculator test
describe("add", () => {

  beforeEach(() => {
    numCalculator = new calculator();
  });

  it("should add two numbers", () => {
    expect(numCalculator.add(1, 2)).toBe(3);
    expect(numCalculator.add(0, 0)).toBe(0);
    expect(numCalculator.add(-1, -1)).toBe(-2);
  });
});

describe("subtract", () => {

  beforeEach(() => {
    numCalculator = new calculator();
  });

  it("should subtract two numbers", () => {
    expect(numCalculator.subtract(1, 2)).toBe(-1);
    expect(numCalculator.subtract(0, 0)).toBe(0);
    expect(numCalculator.subtract(-1, -1)).toBe(0);
  });
});

describe("divide", () => {

  beforeEach(() => {
    numCalculator = new calculator();
  });

  it("should divide two numbers", () => {
    expect(numCalculator.divide(1, 2)).toBe(0.5);
    expect(numCalculator.divide(0, 1)).toBe(0);
    expect(numCalculator.divide(-1, -1)).toBe(1);
  });
});

describe("multiply", () => {

  beforeEach(() => {
    numCalculator = new calculator();
  });

  it("should multiply two numbers", () => {
    expect(numCalculator.multiply(1, 2)).toBe(2);
    expect(numCalculator.multiply(0, 1)).toBe(0);
    expect(numCalculator.multiply(-1, -1)).toBe(1);
  });
});

//capitalize first string character
describe("Capitalize first string character", () => {
  it("should return the first character in a string as uppercase", () => {
    expect(capitalizeFirstChar("hello")).toBe("Hello");
    expect(capitalizeFirstChar("kingno3l")).toBe("Kingno3l");
    expect(capitalizeFirstChar("rhapsody")).toBe("Rhapsody");
  });
});
