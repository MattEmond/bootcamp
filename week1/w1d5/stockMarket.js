var arr = [45, 24 ,35, 31, 40, 38, 11];

function lowestNumber(arr) {
  arr.sort(function(a, b) {
  return a - b;
});
  return arr[0];
}

function highestNumber(arr) {
  arr.sort(function(a, b) {
  return b - a;
});
  return arr[0];
}

function maxProfit(arr) {
 return highestNumber(arr) - lowestNumber(arr);
}

console.log(lowestNumber(arr));
console.log(highestNumber(arr));
console.log(maxProfit(arr));