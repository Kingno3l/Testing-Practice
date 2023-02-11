const { simplifyRange } = require("semver");

const stringLength = (string) => {
    if (string.length < 1 || string.length > 10) {
        throw new Error("String must be between 1 and 10 characters long");
    }
    return string.length;
};

const reverseString = (string) => {
    string = [...string].reverse().join("");
    return string;
};

class calculator {

    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    divide(a, b) {
        if (b === 0) {
          throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
    multiply(a, b) {
        return a * b;
    }
}

const capitalize  = (string) => {
  if (typeof string !== "string") {
    throw new Error("Input must be a string value");
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = {
    stringLength,
    reverseString,
    capitalize,
    numCalculator: calculator,
};
