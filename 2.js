function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
    default:
      return "Неверное значение";
  }
}
const obj = {
  a: 2,
  b: 3,
  operator: "+",
};
const result = calculate.apply(null, [obj.a, obj.b, obj.operator]);
console.log(result);
