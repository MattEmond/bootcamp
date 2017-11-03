var words = ["ground", "control", "to", "major", "tom"];


var map = function(arr, callback) { //On this line, the two arguments passed into the function refer to the "Words" array (arr).  "Callback" refers to the three variables (length, upperCase, and reverse).
  var result = [];
  arr.forEach(function(item) { //the function on this line refers to the fuction on line 7
    result.push(callback(item)); //this essentially means that for each item in the array, invoke a callback function (map), and push all of those results into my empty array (result).
  });
  return result; //This returns my new array filled with all items that have been passed through it.  In this case, tbe three variables (length, upperCase, and reverse)
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


console.log(length);
console.log(upperCase);
console.log(reverse);






/*

SHOULD LOG:

[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]

*/



