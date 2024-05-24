import { extractFormData } from "./src/parser.js";
import { registerNewNumbers, generateResult } from "./src/util/validation.js";

const form = document.querySelector("form");
const output = document.getElementById("result");

function formSubmitHandler(event) {
  event.preventDefault();
  const dataNumberInputs = extractFormData(form);

  const result = registerNewNumbers(dataNumberInputs);

  const resultText = generateResult(result);

  output.textContent = resultText;
}

form.addEventListener("submit", formSubmitHandler);
