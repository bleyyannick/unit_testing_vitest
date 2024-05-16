import { expect, it } from "vitest";

import { transformToNumber } from "./numbers";

it("should return a number when a string is provided", () => {
  //Arrange
  const value = "1";
  //Act
  const result = transformToNumber(value);

  //Assert
  const expectedValue = 1;
  expect(result).toBeTypeOf("number").toBe(expectedValue);
});

it("should return zero if an empty string is provided", () => {
  //Arrange
  const value = "";
  //Act
  const result = transformToNumber(value);
  //Assert
  const expectedNumber = 0;
  expect(result).toBe(expectedNumber);
});

it("should return NaN if a string is provided", () => {
  //Arrange
  const value = "Not like us";
  const obj = {};
  //Act
  const result = transformToNumber(value);
  const otherResult = transformToNumber(obj);
  // Assert
  expect(result).toBeNaN();
  expect(otherResult).toBeNaN();
});

it("should convert to number every item in an array", () => {
  //Arrange
  const value = ["7", "8"];
  //Act
  const result = transformToNumber(value);
  //Assert
  const expectedValues = [7, 8];
  expect(result).toEqual(expectedValues);
});

it("should return NaN if an array of string is provided", () => {
  //Arrange
  const value = ["jhijkhkjh", "jhjkhjkh"];
  //Act
  const result = transformToNumber(value);
  // Assert
  const expectedValues = [NaN, NaN];
  expect(result).toEqual(expectedValues);
});
