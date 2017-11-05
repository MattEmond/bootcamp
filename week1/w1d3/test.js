function mode(arr) {
 let results = {};
 for (num of arr) {
  if (!results[num]) {
    results[num] = 1
    } else {
    results[num] += 1
  }
}

 let biggestNumber = 0;
   for (key of Object.keys(results)) {
    if (results[key] > biggestNumber) {
        biggestNumber = key
          }
        }
  return (biggestNumber)
}