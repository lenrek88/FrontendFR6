import { calc } from "./operations.js";

const button = document.getElementById("button");

function buttonResultHandler() {
  const oneArgument = Number(document.getElementById("one").value);
  const twoArgument = Number(document.getElementById("two").value);
  const operation = document.getElementById("options").value;
  const total = document.getElementById("total");

  const result = calc(operation, oneArgument, twoArgument);

  const newDiv = document.createElement("div");
  newDiv.addEventListener("click", function () {
    this.remove();
  });

  const resultDiv = document.getElementById("result");
  resultDiv.appendChild(newDiv);

  newDiv.textContent = result;
  total.innerHTML = result;
}

button.addEventListener("click", buttonResultHandler);
