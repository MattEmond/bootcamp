var words = ["ground", "control", "to", "major", "tom"];


var map = function(arr, callback) {
  var result = [];
  arr.forEach(function(item) { //the function on this line refers to the fuction on line 7
    result.push(callback(item)); //this essentially means that for each item in the array, invoke a callback function (map), and push all of those results into my empty array.
  });
  return result;
};


var length = map(words, function(word) {
  return word.length;
});

var upperCase = map(words, function(word) {
  return word.toUpperCase();
});

var reverse = map(words, function(word) {
  return word.split('').reverse().join('');
});


console.log(length)
console.log(upperCase)
console.log(reverse)






/*

SHOULD LOG:

[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]

*/



