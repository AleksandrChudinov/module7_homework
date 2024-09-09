function setFullName(fullName) {
  this.fullName = fullName;
}
const person = {};
const setPersonFullName = setFullName.bind(person);
setPersonFullName("John Smith");
console.log(person);
