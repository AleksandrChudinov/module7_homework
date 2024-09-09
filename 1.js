function printInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}.`);
}
const person = {
  name: "Gena",
  age: 54,
};
printInfo.call(person);
