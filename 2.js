function calculate(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else {
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
