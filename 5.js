const numbers = [12, 7, 9, 14, 14, 6, 7, 14, 7, 11, 2, 14, 14, 1, 6];
function getUniqueValues(array) {
  return array.filter((number, index, self) => {
    return self.indexOf(number) === index;
  });
}
const uniqueNumbers = getUniqueValues(numbers);
function getSortedInAscendingOrder(array) {
  return array.sort((a, b) => a - b);
}
const uniqueSortedNumbers = getSortedInAscendingOrder(uniqueNumbers);
console.log(uniqueSortedNumbers);
