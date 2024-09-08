function setFullName(fullName) {
  this.fullName = fullName;
}
let person = {};
const setPersonFullName = setFullName.bind(person);
setPersonFullName("John Smith");
console.log(person);
