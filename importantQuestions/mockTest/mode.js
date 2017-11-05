var mode = function(arr) {
  // initialise object
  // key = number in the array
  // value = times the number occurs in the array
    var results = {};

    for(num of arr) {
    // if the number is already a key in the object
    if(num in results) {
      // increment its value by 1
      results[num] += 1
    // if the number is not a key in the object
        } else {
    // add the number to the object and initialise its value
      results[num] = 1
        }
    };

  // sort the object by its values
  // Object.keys(results) = returns an array containing all of the keys in the object
  sorted = Object.keys(results).sort(function(a, b) {
    // a, b = numbers (keys) in the array
    // use keys to access values in the results object, and compare
    return results[a] - results[b]
    });

  // reverse the array so the largest is first
  // return the first item in the array
  return sorted.reverse()[0]
}

mode([1, 1, 3, 4]) // 1
mode([3, 0, 0, 0, 4]) // 0