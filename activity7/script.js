function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("sum").innerHTML = "Please enter valid numbers.";
    return; //Exit the function if inputs are invalid.
  }
  const sum = num1 + num2;
  const diff = num1 - num2;
  const product = num1 * num2;
  const quotient = num1 / num2;
  const remainder = num1 % num2;

  document.getElementById("sum").innerHTML = "The sum is: " + sum;
  document.getElementById("diff").innerHTML = "The difference is: " + diff;
  document.getElementById("product").innerHTML = "The productis is: " + product;
  document.getElementById("quotient").innerHTML = "The quotient is: " + quotient;
  document.getElementById("remainder").innerHTML = "The remainder is: " + remainder;
}

function clearFields() {
  document.getElementById("sum").innerHTML = "";
  document.getElementById("diff").innerHTML = "";
  document.getElementById("product").innerHTML = "";
  document.getElementById("quotient").innerHTML = "";
  document.getElementById("remainder").innerHTML = "";
}
