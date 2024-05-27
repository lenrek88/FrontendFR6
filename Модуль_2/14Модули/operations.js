export function calc(operation, a, b) {
  switch (operation) {
    case "+":
      return a + b;
    case "*":
      return a * b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    default:
      return "Unknow operation";
  }
}
