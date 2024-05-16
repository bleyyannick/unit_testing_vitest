import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all numbers in an array", () => {
  // The AAA pattern for unit testing

  // Arrange : Given : Setup
  const numbers = [1, 2, 3];
  // Act : When : Execution
  const result = add(numbers);
  // Assert : Then : Verification
  const expectedNumbers = numbers.reduce((acc, num) => +acc + +num, 0);
  expect(result).toBe(expectedNumbers);
});

it("should yield NaN if at least one input is not a number", () => {
  // Arrange
  const inputs = ["invalidinput", 1];
  // Act
  const result = add(inputs);
  // Assert
  expect(result).toBeNaN();
});

it("should yield the correct sum if an array of numeric string is provided", () => {
  //Arrange
  const inputs = ["1", "2"];

  // Act
  const result = add(inputs);

  // Assert
  expect(result).toBe(3);
});

it("should yield 0 if an array is empty", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("should throw an error if there is no arguments", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});
