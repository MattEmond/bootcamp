function isPalindrome(s) {
  var noSpaces = s.split(" ").join("").toLowerCase();
  var mid = Math.floor(noSpaces.length/2);
  var last = noSpaces.length - 1;
  for (i = 0; i <= mid; i++) {
    if (noSpaces[i] !== noSpaces[last - i]) {
      return false;
    }
  }
  return true;

}

module.exports = isPalindrome;
