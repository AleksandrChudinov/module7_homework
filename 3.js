const users = [
  { name: "Michael", age: 22 },
  { name: "Victoria", age: 16 },
  { name: "Elena", age: 17 },
  { name: "Mark", age: 22 },
  { name: "Julian", age: 18 },
];
const adultUsers = users.filter(filterAdultUsers);
function filterAdultUsers(user) {
  return user.age >= 18;
}
const adultUsersNames = adultUsers.map(getNames);
function getNames(user) {
  return user.name;
}
console.log(adultUsersNames);
