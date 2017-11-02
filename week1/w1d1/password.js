let string = 'Are you not entertained?!'

function obfuscate(string) {
  return string.replace(/a/g, 4).replace(/e/g, 3).replace(/o/g, 0).replace(/l/g, 1)
}

console.log(obfuscate(string))


