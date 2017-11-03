function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var current = -1; //This is starting at -1 because the current ++ needs to be invoked before the return, but I still want to return list[0] first

  return function() {
    current ++; //Every time this runs, it increments current by 1, thus allowing us to loop through the array.
    return list[current]; //This returns the current number in the array.
  };

}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6