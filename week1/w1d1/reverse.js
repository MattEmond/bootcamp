var stringArray = process.argv.slice(2)

function reverseString(string) {
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

function loopThroughArray(array) {
  for (var a = 0; a < array.length; a++) {
    console.log(reverseString(array[a]))
  }
}

loopThroughArray(stringArray)