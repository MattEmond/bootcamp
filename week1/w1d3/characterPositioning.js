function countLetters(str) {
  var output = {}
  for (char in str) {
    if (output[str[char]]) {
    output[str[char]].occurances += 1;
    output[str[char]].indices.push(char)
    } else if (str[char] === " ") {

    } else {
      output[str[char]] = {occurances: 1, indices: [char]}
    }
  }
  return output
  }





//   for (i = 0; i < str.length; i++) {
//     if (output[str[i]]) {
//     output[str[i]].occurances += 1;
//     output[str[i]].indices.push(i)
//   } else if (str[i] === " ") {

//   } else {
//     output[str[i]] = {occurances: 1, indices: [i]}
//   }
// }
//   return output
// }

input = process.argv[2]
console.log(countLetters(input))