/* ===========================================================================
 * COUNT - the number of numbers in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */

function count(arr) {
  if (arr[0] === undefined) {
    return 0;
  }
  for (i in arr) {
    i++;

  }
  return i;
}



/* ===========================================================================
 * SUM - the sum of the numbers in a list
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */

function sum(arr) {
  if (arr[0] === undefined) {
    return 0;
  }
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */

function round(number) {
  return Math.round(number * 100) / 100;
}

function mean(arr){
  if (arr[0] === undefined) {
    return null;
  }
  var i = count(arr);
  var avg = sum(arr) / round(i);
  return avg;
}

