function loopThroughArray(array) {
  let newArray = []
  for (var a = 0; a < array.length; a++) {
    newArray.push(pigLatin(array[a]))
  }
  return newArray.join(' ')
}


function pigLatin(string) {
  var newString = string.substr(1) + string.substr(0,1) + 'ay'
  return newString
}



var stringArray = process.argv.slice(2)

console.log(loopThroughArray(stringArray))
