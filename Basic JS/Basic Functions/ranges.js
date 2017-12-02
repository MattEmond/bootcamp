/* ===========================================================================
  * MIN - the lowest value in a list
  *
  * For example:
  *
  *    min([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    0
  */
function min(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr[0];
}


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function max(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });
  return arr[0];
}


/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function range(arr) {
  return max(arr) - min(arr);
}

// Don't change below:

module.exports = { min: min, max: max, range: range };