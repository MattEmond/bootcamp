input = process.argv[2];

function countLetters(str) {
  var output = {};
  for (char of str) {
    if (output[char]) {
    output[char] += 1;
  } else if (char === " ") {

  } else {
    output[char] = 1;
  }
}
  return output;
}


console.log(countLetters(input));