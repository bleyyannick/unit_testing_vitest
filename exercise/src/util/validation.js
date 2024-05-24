import { add } from "../math.js";
import { transformToNumber } from "./numbers.js";

export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error("Invalid input - must not be empty.");
  }
}

export function validateNumber(number) {
  if (isNaN(number) || typeof number !== "number") {
    throw new Error("Invalid number input.");
  }
}

export const addValidatedNumber = (inputs) => {
  const numbers = [];
  for (const numberInput of inputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
};

export const registerNewNumbers = (inputs) => {
  let result = "";
  try {
    const validatedNumbers = addValidatedNumber(inputs);
    result = add(validatedNumbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
};

export const generateResult = (text) => {
  let resultText = "";
  if (text === "invalid") {
    resultText = "Invalid input. You must enter valid numbers.";
  } else if (text !== "no-calc") {
    resultText = "Result: " + text;
  }
  return resultText;
};
