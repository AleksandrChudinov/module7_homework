function printInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}.`);
}
let person = {
  name: "Gena",
  age: 54,
};
printInfo.call(person);
